import { Injectable } from '@nestjs/common';
import { Review } from './interface/review.interface';
import { CreateReviewDto } from './dto/create-review.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class ReviewsService {
  private reviews: Review[] = [];

  addReview(createReviewDto: CreateReviewDto): Review {
    const id = randomUUID();
    const review: Review = {
      ...createReviewDto,
      id,
      createdAt: Date.now(),
    };
    this.reviews.push(review);
    return review;
  }

  getReviewsByProductId(productId: string): Review[] {
    return this.reviews.filter((r) => r.productId === productId);
  }

  getReviewsBySellerId(sellerId: string): Review[] {
    return this.reviews.filter((r) => r.sellerId === sellerId);
  }
}
