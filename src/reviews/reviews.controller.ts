import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import type { Review } from './interface/review.interface';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  addReview(@Body() createReviewDto: CreateReviewDto): Review {
    return this.reviewsService.addReview(createReviewDto);
  }

  @Get()
  getReviews(
    @Query('productId') productId?: string,
    @Query('sellerId') sellerId?: string,
  ): Review[] {
    if (productId) {
      return this.reviewsService.getReviewsByProductId(productId);
    }
    if (sellerId) {
      return this.reviewsService.getReviewsBySellerId(sellerId);
    }
    return [];
  }
}
