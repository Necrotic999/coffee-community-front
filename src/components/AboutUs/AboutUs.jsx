import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section>
        <div className='flex '> 
            <Image src = "/images/aboutUs_pic1.jpg" alt ='' width={166} height={206} />
            <p className='text-[12px] font-advent font-bold text-[#FFFFFF]' >Сьогодні Coffee Community — це не просто кав’ярня. Це місце, куди приходять не за кавою, а за відчуттям дому. Тут завжди тепло: у чашці, у словах бариста, у знайомих обличчях, що заходять до нас, ніби до своїх.
                За п’ять років ми перетворилися на маленьку, але дуже щиру спільноту людей, які цінують прості речі — комфорт, людяність та справжній смак.  Але наш шлях був непростим. І він дуже відображає те, через що проходила всі люди.
            </p>
        </div>

    </section>
  )
}
export default AboutUs
