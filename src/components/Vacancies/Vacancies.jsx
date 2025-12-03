'use client';
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import useDeviceType from "@/lib/hooks/useDeviceType";
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
import { useDispatch } from 'react-redux';
import { sendVacancyThunk } from '@/redux/vacancies/operations';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  

const Vacancies = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);
  const deviceType = useDeviceType();
  const dispatch = useDispatch();

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

      dispatch(sendVacancyThunk({ name, surname, phoneNumber, recaptchaToken: token }));
      // console.log({ name, surname, phoneNumber, recaptchaToken: token });

      form.reset();
      recaptchaRef.current.reset();
    } catch (err) {
      console.error("reCAPTCHA помилка:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className='px-4 mb-50px min-[768px]:mb-[80px] min-[1440px]:mb-[130px]'>
    <div className='w-full h-[60px] bg-[#FF0000] blur-3xl z-0 relative top-0 left-0 min-[768px]:h-[168px] min-[768px]:-top-20 min-[768px]:blur-[150px] min-[768px]:left-0 '/>
        <h2 className='font-[play] font-bold text-[#FFFFFF] text-[20px] z-10 relative mt-5 text-center mb-2 min-[768px]:text-[30px] min-[768px]:-mt-15 min-[1440px]:text-[46px] min-[1440px]:mt-0 min-[1440px]:mb-[71px]'>Хочешь приєднатися до нашої <br/> команди?</h2>
    <div className='flex relative gap-2 mb-4  min-[768px]:flex-row items-center justify-center min-[1440px]:gap-15 min-[1440px]:mb-14'>
        <Image src='/images/vacancies.png' alt='' width={184} height={123} className='min-[768px]:w-[385px] min-[768px]:h-[257px] min-[1440px]:w-[644px] min-[1440px]:h-[430px]'/>
        <p className='font-[play] text-[12px] text-left leading-3 min-[768px]:text-[22px] min-[768px]:leading-7 min-[1440px]:text-[40px] min-[1440px]:leading-12'>Ми сучасна кав’ярня у <br /> самому серці Тарасівки, де <br />аромат якісної кави <br /> поєднується з атмосферою <br /> затишку та дружнього <br /> сервісу. Ми ростемо й <br /> запрошуємо в команду <br /> енергійну та відповідальну  людину, яка любить людей і <br /> каву так само, як і ми.</p>
    </div>
    <div className=" flex flex-col items-center text-[#FFFFFF] text-[14px] min-[768px]:text-[22px] leading-6 min-[1440px]:text-[40px] min-[1440px]:leading-10">
        <div className='flex flex-col items-center mb-3 min-[1440px]:mb-15'>
          <h3 className="font-[play] text-[14px] min-[768px]:text-[22px] mb-0 min-[1440px]:text-[40px]">Що потрібно робити:</h3>
          <ul className="list-disc  list-inside flex flex-col text-center">
            <li>готувати кавові напої за стандартами <br/>кав’ярні;</li>
            <li>працювати з касою та обслуговувати гостей <br/> з усмішкою;</li>
            <li>підтримувати чистоту на робочому місці;</li>
            <li>допомагати створювати комфортну <br/> атмосферу для кожного відвідувача.</li>
          </ul>
        </div>

        <div className=" flex flex-col items-center mb-3 min-[1440px]:text-[40px] min-[1440px]:leading-10 min-[1440px]:mb-15"> 
          <h3 className="font-[play] text-[14px] min-[768px]:text-[22px] mb-0 min-[1440px]:text-[40px]">Ми очікуємо:</h3>
          <ul className="list-disc list-inside flex flex-col text-center">
            <li>відповідальність, пунктуальність, охайність;</li>
            <li>бажання навчатися та розвиватися;</li>
            <li>досвід буде перевагою, але навчаємо з <br/> нуля.</li>
          </ul>
        </div>

        <div className=" flex flex-col items-center min-[1440px]:text-[40px] min-[1440px]:leading-10">
          <h3 className="font-[play] text-[14px] min-[768px]:text-[22px] mb-0 min-[1440px]:text-[40px]">Ми пропонуємо:</h3>
          <ul className="list-disc list-inside flex flex-col text-center mb-[22px] min-[768px]:mb-[33px] min-[1440px]:mb-15">
            <li>дружню команду та підтримку на старті;</li>
            <li>гнучкий графік;</li>
            <li>стабільну оплату та бонуси;</li>
            <li>комфортні умови праці та можливість <br/> професійного зростання.</li>
          </ul>
        </div>
      </div>
      <h2 className=" min-[768px]:text-[30px] min-[768px]:leading-7 min-[768px]:mb-[39px] min-[1440px]:text-[46px] min-[1440px]:leading-11 font-bold text-center mb-2.5 text-[#D9D9D9] text-[22px] font-advent leading-6">
        Зроби свій перший крок до <br/> нової роботи - заповни <br />коротку форму!
      </h2>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <div className="flex flex-col gap-0.5 items-center ">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Вкажіть ваше ім'я..."
                    className="w-full text-[10px] px-4 min-[768px]:text-[14px] min-[1440px]:text-[26px] py-2 bg-[#512424] rounded-[14px] text-[#D9D9D9] placeholder:text-[#785C5C] border-none w-[250px] min-[768px]:w-[475px]  min-[1440px]:w-[800px] min-[1440px]:h-[60px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-5 text-[10px] min-[768px]:text-[12px] min-[1440px]:text-[16px]" />
              </div>
            )}
          />

          <FormField
            control={control}
            name="surname"
            render={({ field }) => (
              <div className="flex flex-col gap-0.5 items-center ">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Вкажіть ваше прізвище..."
                    className="w-full px-4 text-[10px] min-[768px]:text-[14px] min-[1440px]:text-[26px] py-2 bg-[#512424] rounded-[14px] text-[#D9D9D9] placeholder:text-[#785C5C] border-none w-[250px] min-[768px]:w-[475px] min-[1440px]:w-[800px] min-[1440px]:h-[60px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-5 text-[10px] min-[768px]:text-[12px] min-[1440px]:text-[16px]" />
              </div>
            )}
          />
          <FormField
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <div className="flex flex-col  items-center mb-2.5 min-[768px]:mb-[18px] min-[1440px]:mb-[34px]">
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Ваш номер телефону..."
                    className="w-full px-4 py-2 bg-[#512424] rounded-[14px] min-[768px]:text-[14px] min-[1440px]:text-[26px] text-[#D9D9D9] placeholder:text-[#785C5C] border-none w-[250px]  min-[768px]:w-[475px] min-[1440px]:w-[800px] min-[1440px]:h-[60px] text-[10px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-5 text-[10px] min-[768px]:text-[12px] min-[1440px]:text-[16px]" />
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
            className="w-52 h-[35px] min-[768px]:w-[357px] min-[768px]:h-[46px] min-[768px]:text-[19px] min-[1440px]:w-[677px] min-[1440px]:h-[60px] min-[1440px]:text-[27px] from-[#BE0000] to-[#000000] hover:from-[#D00000] hover:to-[#1a1a1a] text-white font-extrabold text-[14px] font-jost py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] neon-gradient-review-button disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Надіслати дані
          </button>
        </form>
      </Form>
    </section>

  )
}

export default Vacancies;