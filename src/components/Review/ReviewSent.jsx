"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import StarRating from "../StarRating/StarRating";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { sendReviewThunk } from "@/redux/reviews/operations";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const ReviewSent = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

  const schema = z.object({
    name: z
      .string({
        required_error: "Це поле обов'язкове",
      })
      .min(2, { message: "Це поле обов'язкове, мінімум 2 символи" })
      .max(20, { message: "Ви досягли максимальної кількості символів" }),
    review: z
      .string({
        required_error: "Це поле обов'язкове",
      })
      .min(4, { message: "Це поле обов'язкове, мінімум 4 символи" })
      .max(500, { message: "Ви досягли максимальної кількості символів" }),
    barRating: z.number().min(1),
    serviceRating: z.number().min(1),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      review: "",
      barRating: 0,
      serviceRating: 0,
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = async ({ name, review, barRating, serviceRating }) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      if (!recaptchaRef.current) {
        throw new Error("reCAPTCHA не ініціалізовано");
      }

      const token = await recaptchaRef.current.executeAsync();

      toast.success("Відгук успішно надіслано!");

      if (!token) {
        throw new Error("Токен не згенеровано");
      }

      const query = {
        name,
        review,
        rating: Math.round((barRating + serviceRating) / 2),
        recaptchaToken: token,
      };

      dispatch(sendReviewThunk(query));

      console.log(query);

      form.reset();
      recaptchaRef.current.reset();
    } catch (err) {
      console.error("reCAPTCHA помилка:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[url('/images/bg_review_sent.png')] flex items-center justify-center py-12 px-4 flex-col mb-2.5">
      <h2 className="text-5 md:text-4xl min-[1440px]:text-5xl font-bold text-center mb-6 text-[#D9D9D9] text-[22px] font-advent">
        Поділіться своїми враженнями
      </h2>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col md:flex-row md:gap-7">
            <FormField
              control={control}
              name="barRating"
              render={({ field }) => (
                <div className="flex flex-col bg-[#512424] pt-1 pb-4 mb-4 w-[280px] rounded-[14px] justify-center items-center gap-2.5 outline-none">
                  <FormLabel className="block text-lg font-medium text-[#D9D9D9]">
                    Бар і десерти
                  </FormLabel>
                  <StarRating
                    rating={field.value}
                    onRate={(value) => field.onChange(value)}
                  />
                </div>
              )}
            />

            <FormField
              control={control}
              name="serviceRating"
              render={({ field }) => (
                <div className="flex flex-col bg-[#512424] pt-1 pb-4 mb-4 w-[280px] rounded-[14px] justify-center items-center gap-2.5 outline-none">
                  <FormLabel className="block text-lg font-medium text-[#D9D9D9]">
                    Сервіс
                  </FormLabel>
                  <StarRating
                    rating={field.value}
                    onRate={(value) => field.onChange(value)}
                  />
                </div>
              )}
            />
          </div>

          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <div className="flex flex-col gap-0.5">
                <FormLabel className="block text-lg font-medium text-[#CECECE] ml-4 text-[14px]">
                  Ім`я
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Вкажіть ваше ім'я..."
                    className="w-full px-4 py-2 bg-[#512424] rounded-[14px] text-[#D9D9D9] placeholder:text-[#785C5C] border-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-5" />
              </div>
            )}
          />

          <FormField
            control={control}
            name="review"
            render={({ field }) => (
              <div className="flex flex-col gap-0.5">
                <FormLabel className="block font-medium text-[#CECECE] ml-5 text-[14px]">
                  Що вам більше всього сподобалось?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Написати відгук..."
                    rows={4}
                    className="w-full px-4 py-2 outline-none bg-[#512424] rounded-[14px] resize-none text-[#D9D9D9] placeholder:text-[#785C5C] border-none focus-visible:outline-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-5" />
              </div>
            )}
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            size="invisible"
          />

          <button
            type="submit"
            className="w-full from-[#BE0000] to-[#000000] hover:from-[#D00000] hover:to-[#1a1a1a] text-white font-extrabold text-[20px] py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] neon-gradient-review-button disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            Надіслати відгук
          </button>
        </form>
      </Form>
    </section>
  );
};

export default ReviewSent;
