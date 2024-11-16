import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @OneToMany(() => Post, post => post.user)
  posts!: Post[];

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}