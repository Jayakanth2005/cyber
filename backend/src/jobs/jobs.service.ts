import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private jobRepo: Repository<Job>) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const job = this.jobRepo.create(createJobDto);
    return this.jobRepo.save(job);
  }

  async findAll(filters: any, page = 1, limit = 10): Promise<{ data: Job[]; total: number }> {
    const query = this.jobRepo.createQueryBuilder('job');

    if (filters.title) query.andWhere('job.title ILIKE :title', { title: `%${filters.title}%` });
    if (filters.location) query.andWhere('job.location ILIKE :location', { location: `%${filters.location}%` });
    if (filters.jobType) query.andWhere('job.jobType = :jobType', { jobType: filters.jobType });
    if (filters.minSalary) query.andWhere('job.salaryRange >= :minSalary', { minSalary: filters.minSalary });
    if (filters.maxSalary) query.andWhere('job.salaryRange <= :maxSalary', { maxSalary: filters.maxSalary });

    const [data, total] = await query
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { data, total };
  }

  async findOne(id: string): Promise<Job> {
    const job = await this.jobRepo.findOne({ where: { id } });
    if (!job) throw new NotFoundException('Job not found');
    return job;
  }

  async update(id: string, updateJobDto: UpdateJobDto): Promise<Job> {
    const job = await this.findOne(id);
    Object.assign(job, updateJobDto);
    return this.jobRepo.save(job);
  }

  async remove(id: string): Promise<void> {
    const job = await this.findOne(id);
    await this.jobRepo.remove(job);
  }
}
