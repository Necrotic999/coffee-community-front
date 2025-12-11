'use client'
import useDeviceType from '@/lib/hooks/useDeviceType'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  const deviceType = useDeviceType()
  return (
    <section className='pt-[111px] mb-6 min-[768px]:mb-14  min-[1440px]:mb-[42px]  px-1 bg-[url("/images/mobile_fone.png")] min-[768px]:bg-[url("/images/Tablet_fone.png")] min-[1440px]:bg-[url("/images/Desktop_fone.png")] bg-cover bg-no-repeat min-[768px]:px-8 min-[1440px]:px-12 relative overflow-x-hidden' >
      <p className='text-[12px] mt-[-35px] min-[768px]:-mt-2.5 min-[1440px]:mt-2 relative z-10 font-[play] mb-4 min-[768px]:text-[22px] min-[1440px]:text-[34px]'>
          Сьогодні Coffee Community — це не просто кав’ярня.
            Це місце, куди приходять не за кавою, а за відчуттям дому.</p> 
        <div className="flex gap-4 mb-8"> 
        
        <div className="shrink-0">
          <Image
            src="/images/aboutUs_pic1.jpg"
            alt="Coffee Community"
            width={166}
            height={206}
            className="w-[166px] h-[206px] relative z-10 object-cover rounded-lg min-[768px]:w-[316px] min-[768px]:h-[392px] min-[1440px]:w-[461px] min-[1440px]:h-[572px]"
            priority
          />
        </div>

        <div className="flex flex-col justify-center -mt-2 relative z-10 ">
          <p className="text-[12px]  font-[play] min-[768px]:text-[22px] min-[1440px]:text-[34px] ">
            Тут завжди тепло: у чашці, у словах бариста, у знайомих обличчях, що заходять до нас, ніби до своїх.
            <br />
            За п’ять років ми перетворилися на маленьку, але дуже щиру спільноту людей, які цінують прості речі — комфорт, людяність та справжній смак.
            <br />
            Але наш шлях був непростим. І він дуже відображає те, через що проходила всі люди.
          </p>
        {deviceType === "desktop"? <><h2 className='text-[16px] font-bold font-[play] min-[768px]:text-[22px] min-[1440px]:text-[36px]'>Як усе почалося</h2>

          <p className='text-[16px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] '>Ми відкрили Coffee Community 23 жовтня 2020 року, коли світ стояв на паузі.
              <br />
              Карантини, заборони, страх невідомості — усе це змушувало людей сидіти вдома й майже не бачитися між собою.</p></> : ""}
        </div>
        
      </div>
        <div className='px-2 relative z-10 '>
          <div className='flex flex-col not-first:gap-4 mb-2  relative z-10'>
            {deviceType !== "desktop"? <><h2 className='text-[16px] font-bold font-[play] min-[768px]:text-[22px] min-[1440px]:text-[36px]'>Як усе почалося</h2>

          <p className='text-[13px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] '>Ми відкрили Coffee Community 23 жовтня 2020 року, коли світ стояв на паузі.
              <br />
              Карантини, заборони, страх невідомості — усе це змушувало людей сидіти вдома й майже не бачитися між собою.</p></> : ""}
          <p className='text-[13px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] '>
             
              У Тарасівці тоді не було місця, куди можна було б вийти поруч, без потреби їхати далеко:
              <br />
              просто посидіти з сім’єю, зустрітися з друзями або втекти на годинку від тиші та самотності.
              <br /><br />
              Саме тому ми від самого початку знали, що хочемо створити не просто кав’ярню.
              Ми хотіли створити спільноту.
              <br />
              Так і народилася назва Coffee Community.
          </p>
          </div>
          <div className='flex  relative z-10'>
            
            <p className='text-[13px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] relative z-10'>Це слово з’явилося не випадково — воно відображало те, чого всім нам тоді не вистачало: живого спілкування, теплих розмов та людського тепла.
              <br /><br />
             У час, коли більшість дверей були зачинені, ми хотіли відкрити свої — для всіх.
             <br />
              Створити місце, де кожен може відчути себе своїм.
              <br /><br />
              {deviceType === "desktop"? <>
              <span className='text-[16px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] '>Ми назвалися Community, бо мріяли, щоб навколо кав’ярні зібралися люди, які знайомляться, дружать, діляться, сміються.
              <br />
              І вже тоді ми пообіцяли собі: якщо хоч один гість відчує тут тепло — значить, ми назвалися правильно.</span></> : ""}
            </p>
              
            <Image
            src="/images/aboutUs_pic2.jpg"
            alt="Coffee Community"
            width={170}
            height={212}
            className="w-[170px] h-[212px] object-cover rounded-lg min-[768px]:w-[336px] min-[768px]:h-[418px] min-[1440px]:w-[484px] min-[1440px]:h-[602px]"
            priority
            />
            
          </div>
          
          <div className='relative z-10'>
             {deviceType !== "desktop"? <>
              <p className='text-[13px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] z-10 relative'>Ми назвалися Community, бо мріяли, щоб навколо кав’ярні зібралися люди, які знайомляться, дружать, діляться, сміються.
              <br />
              І вже тоді ми пообіцяли собі: якщо хоч один гість відчує тут тепло — значить, ми назвалися правильно.</p></> : ""}
            <h2 className='text-[16px] font-bold font-[play] mb-3 min-[768px]:text-[22px] min-[1440px]:text-[34px]  relative z-10'>Наші перші роки: як ми ставали собою <br /><br /></h2>
            <p className='text-[13px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] relative z-10'>Перші місяці після відкриття були схожі на довге, тепле знайомство.
              <br />
              Люди спершу заходили обережно, просто подивитися, а вже за тижні поверталися з друзями, приводили дітей, розповідали іншим:
              <br /><br />
              „Там у Тарасівці є нове місце — варто зайти.“
              <br /><br />
              Саме тоді й народжувалася та сама спільнота, про яку ми мріяли.
              <br /><br />
              Ми вчилися разом із вами:
              <br />
              — підбирали правильне зерно,
              <br />
              — експериментували з десертами,
              <br />
              — ловили баланс смаку,
              <br />
              — слухали людей, які заходили на хвилинку, а залишалися надовго.
              <br /><br />
              Часто після робочого дня бариста ще довго сиділи з гостями, сміялися, говорили про життя, ділилися новинами.
              <br />
              Так кав’ярня поступово перетворилася на місце, яке в Тарасівці називали просто:
              <br /><br />
              „Пішли в Community на каву.“
              <br /><br />
              Ми працювали у спокійному ритмі, будували плани, розробляли нові напої, знайомилися з новими обличчями.
              <br /><br />
              Здавалося, що попереду — лише ріст і розвиток.
              <br /><br />
             </p>
             <h2 className='text-[16px] font-bold font-[play] mb-3 min-[768px]:text-[22px] min-[1440px]:text-[34px]'>Але 2022 рік змінив усе.</h2>
             
          </div>
          
          <div className='relative z-10'>
            <p className='text-[13px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] relative z-10'>
              Коли країна здригнулася — здригнулися й ми
              <br /><br />
              Початок війни знову закрив усіх у домівках.
              <br />
              Тиша вулиць була важчою за будь-який карантин.
              <br />
              Ми теж зачинилися — бо тоді здавалося, що наразі ніхто не думає про каву.
              <br /><br />
              Та вже через два дні люди почали стукати у наші двері.
              <br />
              Просили, говорили:
              <br /><br />
              „Відкрийтесь, будь ласка. Хочеться хоч на хвилину нормального життя. Хочеться смачної кави та трохи тепла.“
              <br />
              І ми зрозуміли: людям потрібно місце, де вони можуть відволіктися, поговорити, побути разом.
              <br />
              І ми повинні бути цим місцем.
              <br /><br />
              Ми відкрилися — попри всі складнощі.
              <br /><br />
              Поставок кави не було.
              <br />
              Молоко купували будь-яке, яке вдавалося знайти в магазині.
              <br />
              Не найкраще, але іншого тоді просто не існувало.
              <br />
              Ми імпровізували, змішували, пробували — інколи це нагадувало маленьку алхімію. 
              <br />
              Але всі напої робилися з душею. 
              <br />
              І, мабуть, саме тому люди поверталися.
              <br /><br />
            </p>
          </div>
          <div className='mb-3'>
            <h2 className='text-[16px] font-bold font-[play] mb-3 min-[768px]:text-[22px] min-[1440px]:text-[36px] relative z-10'>Пам’ять, яка назавжди в наших стінах</h2>
            <p className='text-[13px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] relative z-10'>2022 рік приніс нам ще одну біль.
              <br />
              Однією з найдорожчих для нас людей була Інна Дехтяренко — лікар і надзвичайно щира, добра та відкрита людина, яка часто заходила до нас і стала частинкою нашої спільноти.
              
            </p>
          </div>
          <div className='flex items-center'>
            <Image
            src="/images/aboutUs_pic3.jpg"
            alt="Coffee Community"
            width={163}
            height={208}
            className="w-[170px] h-[212px] mb-2 object-cover rounded-lg mr-2.5 min-[768px]:mr-4 min-[768px]:w-[314px] min-[768px]:h-[401px] min-[1440px]:w-[372px] min-[1440px]:h-[419px] min-[1440x]:mr-[27px] relative z-10"
            priority
            />
            <p className='text-[14px] -mt-2 font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] relative z-10'>
              Одного дня на початку війни вона поїхала до складу, щоб забрати необхідні ліки.
              <br />
              Коли вона прибула туди, на територію прилетів дрон.
              <br />
              Інна загинула на місці…
              {deviceType === "desktop"? <>
              <span className='text-[16px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] '>Це стало великим болем не лише для її близьких, а й для всієї нашої кав’ярні, адже ми втратили людину, яка завжди приносила з собою спокій, усмішку і тепло.
              <br />
              На її честь ми повісили картину, яку художник намалював вручну.
              <br />
              Це наш спосіб зберегти пам’ять про неї.
              <br />
              Вона завжди залишатиметься частиною Coffee Community.</span></> : ""}
              {deviceType === "tablet"? <>
              <span className='text-[16px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] '> <br />Це стало великим болем не лише для її близьких, а й для всієї нашої кав’ярні, адже ми втратили людину, яка завжди приносила з собою спокій, усмішку і тепло.
              <br />
              На її честь ми повісили картину, яку художник намалював вручну.
              <br />
              Це наш спосіб зберегти пам’ять про неї.
              <br />
              Вона завжди залишатиметься частиною Coffee Community.</span></> : ""}
            </p>
            
          </div>
          {deviceType !== "desktop"? <>
              <span className='text-[13px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] '>Це стало великим болем не лише для її близьких, а й для всієї нашої кав’ярні, адже ми втратили людину, яка завжди приносила з собою спокій, усмішку і тепло.
              <br />
              На її честь ми повісили картину, яку художник намалював вручну.
              <br />
              Це наш спосіб зберегти пам’ять про неї.
              <br />
              Вона завжди залишатиметься частиною Coffee Community.</span></> : ""}
              {deviceType !== "tablet"? <>
              <span className='text-[13px] font-[play] min-[768px]:text-[22px] min-[1440px]:text-[32px] '>Це стало великим болем не лише для її близьких, а й для всієї нашої кав’ярні, адже ми втратили людину, яка завжди приносила з собою спокій, усмішку і тепло.
              <br />
              На її честь ми повісили картину, яку художник намалював вручну.
              <br />
              Це наш спосіб зберегти пам’ять про неї.
              <br />
              Вона завжди залишатиметься частиною Coffee Community.</span></> : ""}
          <div className='flex flex-col items-center relative z-10'>
            <h2 className='text-[16px] font-bold font-[play] mb-3  min-[768px]:mt-3 min-[1440px]:mt-5 min-[768px]:text-[22px] min-[1440px]:text-[36px] relative z-10'>З 2020 року разом — і це тільки початок</h2>
            <p className='text-[13px] font-[play] text-center min-[768px]:text-[22px] min-[1440px]:text-[32px] relative z-10'>
              За ці роки Coffee Community стало більше, ніж кав’ярнею.
              <br />
              Це місце, яке живе завдяки людям, що приходять до нас щодня — з радістю, з історіями, з переживаннями, з планами на майбутнє.
              <br />
              Ми бачили тут перші побачення, зустрічі після довгих розставань, дитячі свята, затишні ранки і теплі вечори. 
              <br /><br />
              Ми зростали разом із вами.
              <br />
              І продовжуємо рости — бо поки є спільнота, є й Coffee Community.
              <br /><br />
              Дякуємо, що є з нами.
              <br />
              Дякуємо, що заходите — на каву, на розмову, на хвилинку тиші.
              <br /><br />
              Coffee Community — Спільнота, що тримається разом.
              <br />
              І тримає одне одного.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
            src="/images/aboutUs_pic4.jpg"
            alt="Coffee Community"
            width={323}
            height={204}
            className="w-[323px] h-[204px] object-cover rounded-lg min-[768px]:w-[595px] min-[768px]:h-[376px] min-[1440px]:w-[968px] min-[1440px]:h-[613px] relative z-10"
            priority
            />
          </div>
        </div>
    </section>
  )
}
export default AboutUs
