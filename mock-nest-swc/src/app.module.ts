import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core/router';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

/**
 * 使用 RouterModule.register 增加 Module 前缀
 */
@Module({
  imports: [
    RouterModule.register([
      {
        // 定义前缀
        path: 'mock',
        // 应用在哪个 moudule 上
        module: MockModule,
      },
    ]),
    MockModule,
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class MockModule {}
