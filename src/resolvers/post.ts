import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";
import { MyContext } from "../../types";
import { Post } from "../entities/Post";

@Resolver()
export class PostResolver{
    @Query(() => [Post])
    posts(
        @Ctx() {em}: MyContext
    ) {
        return em.find(Post, {})
    }


    @Query(() => Post, {nullable: true})
    post(
        @Arg('id', () => Int) id: number,
        @Ctx() {em}: MyContext
    ) : Promise<Post | null> {
        return em.findOne(Post, {id})
    }
}