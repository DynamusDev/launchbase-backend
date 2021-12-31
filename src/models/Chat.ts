import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import User from "./User";

@Entity("messages")
export default class Chat {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => User, (user) => user.messages, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
    eager: true,
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
