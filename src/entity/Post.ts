import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, user => user.posts)
  user: User;

  @Column()
  userId: number;

  constructor(title: string, description: string, userId: number) {
    this.title = title;
    this.description = description;
    this.userId = userId;
    this.user = undefined!;
  }
}