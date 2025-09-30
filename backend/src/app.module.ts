// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsModule } from './jobs/jobs.module';
import { Job } from './jobs/entities/job.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'jayakanth',
      database: 'Cyber',
      entities: [Job], 
      synchronize: true,     
    }),
    JobsModule,
  ],
})
export class AppModule {}

