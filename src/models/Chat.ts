import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import User from "./User";

@Entity("messages")
export default class Chat {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToMany(() => User, (user) => user.messages, {
    eager: true,
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  author: User;

  @Column({ type: "varchar" })
  room: string;

  @Column({ type: "varchar", nullable: true })
  datetime: string;

  @Column({ type: "varchar" })
  message: string;

  @Column({ type: "varchar" })
  type: string;
}
