'use client';
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;


  

const Vacancies = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

  const schema = z.object({
    name: z
      .string({
        required_error: "Це поле обов'язкове",
      })
      .min(2, { message: "Це поле обов'язкове, мінімум 2 символи" })
      .max(20, { message: "Ви досягли максимальної кількості символів" }),
    surname: z
      .string({
        required_error: "Це поле обов'язкове",
      })
      .min(2, { message: "Це поле обов'язкове, мінімум 2 символи" })
      .max(20, { message: "Ви досягли максимальної кількості символів" }),
    phoneNumber: z
      .string({
        required_error: "Це поле обов'язкове",})
        .regex(/^[\d\s+()-]+$/, { message: "Введіть дійсний номер телефону" }),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      surname: "",
      phoneNumber: "",
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = async ({ name, surname, phoneNumber }) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      if (!recaptchaRef.current) {
        throw new Error("reCAPTCHA не ініціалізовано");
      }

      const token = await recaptchaRef.current.executeAsync();

      toast.success("Дані успішно надіслано!");

      if (!token) {
        throw new Error("Токен не згенеровано");
      }

      console.log({
        name,
        surname,
        phoneNumber,
        recaptchaToken: token,
      });

      form.reset();
      recaptchaRef.current.reset();
    } catch (err) {
      console.error("reCAPTCHA помилка:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className='px-4'>
    <div className='w-full h-[60px] bg-[#FF0000] blur-3xl z-0 relative top-0 left-0'/>
        <h2 className='font-[play] font-bold text-[#FFFFFF] text-[20px] z-10 mt-5 text-center mb-2'>Хочешь приєднатися до нашої команди?</h2>
    <div className='flex relative  md:flex-row items-center justify-between  gap-2 mb-4'>
        <Image src='/images/vacancies.png' alt='' width={184} height={123}/>
        <p className='font-[play] text-[12px] text-left leading-3'>Ми сучасна кав’ярня у самому серці Тарасівки, де аромат якісної кави поєднується з атмосферою затишку та дружнього сервісу. Ми ростемо й запрошуємо в команду енергійну та відповідальну людину, яка любить людей і каву так само, як і ми.</p>
    </div>
    <div className=" flex flex-col items-center text-[#FFFFFF] text-[14px] md:text-[16px] leading-4">
        <div className='flex flex-col items-center mb-3'>
          <h3 className="font-[play] text-[14px] md:text-[18px] mb-0">Що потрібно робити:</h3>
          <ul className="list-disc  list-inside flex flex-col text-center">
            <li>готувати кавові напої за стандартами <br/>кав’ярні;</li>
            <li>працювати з касою та обслуговувати гостей <br/> з усмішкою;</li>
            <li>підтримувати чистоту на робочому місці;</li>
            <li>допомагати створювати комфортну <br/> атмосферу для кожного відвідувача.</li>
          </ul>
        </div>

        <div className=" flex flex-col items-center mb-3"> 
          <h3 className="font-[play] text-[14px] md:text-[18px] mb-0">Ми очікуємо:</h3>
          <ul className="list-disc list-inside flex flex-col text-center">
            <li>відповідальність, пунктуальність, охайність;</li>
            <li>бажання навчатися та розвиватися;</li>
            <li>досвід буде перевагою, але навчаємо з <br/> нуля.</li>
          </ul>
        </div>

        <div className=" flex flex-col items-center">
          <h3 className="font-[play] text-[14px] md:text-[18px] mb-0">Ми пропонуємо:</h3>
          <ul className="list-disc list-inside flex flex-col text-center">
            <li>дружню команду та підтримку на старті;</li>
            <li>гнучкий графік;</li>
            <li>стабільну оплату та бонуси;</li>
            <li>комфортні умови праці та можливість <br/> професійного зростання.</li>
          </ul>
        </div>
      </div>
      <h2 className="text-5 md:text-4xl min-[1440px]:text-5xl font-bold text-center mb-6 text-[#D9D9D9] text-[22px] font-advent">
        Поділіться своїми враженнями
      </h2>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <div className="flex flex-col gap-0.5">
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
            name="surname"
            render={({ field }) => (
              <div className="flex flex-col gap-0.5">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Вкажіть ваше прізвище..."
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
            name="phoneNumber"
            render={({ field }) => (
              <div className="flex flex-col gap-0.5">
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Ваш номер телефону..."
                    className="w-full px-4 py-2 bg-[#512424] rounded-[14px] text-[#D9D9D9] placeholder:text-[#785C5C] border-none"
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
            className="w-full from-[#BE0000] to-[#000000] hover:from-[#D00000] hover:to-[#1a1a1a] text-white font-extrabold text-[20px] py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] neon-gradient-review-button disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Надіслати дані
          </button>
        </form>
      </Form>
    </section>

  )
}

export default Vacancies;