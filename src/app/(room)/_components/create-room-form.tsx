"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createRoomSchema } from "@/lib/validation";
import { useTransition } from "react";
import { Snipper } from "@/constants";
import { createRoomAction } from "../create-room/action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CreateRoomForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof createRoomSchema>>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: "",
      description: "",
      tags: "",
      githubRepo: "",
    },
  });

  function onSubmit(values: z.infer<typeof createRoomSchema>) {
    // TODO: send values to the server action for creating a new room
    startTransition(async () => {
      try {
        const res = await createRoomAction(values);
        form.reset();
        router.push("/");
        toast.success(res);
      } catch (error: any) {
        toast.error(error.message);
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room Name</FormLabel>
              <FormControl>
                <Input placeholder="Chat Room Name" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Chat room description" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="githubRepo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Repository</FormLabel>
              <FormControl>
                <Input placeholder="Github Reponsitory link" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Programming Language</FormLabel>
              <FormControl>
                <Input placeholder="js, ts, nextjs" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending && <Snipper />} Create
        </Button>
      </form>
    </Form>
  );
};
export default CreateRoomForm;
