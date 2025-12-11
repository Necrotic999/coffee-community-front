const Additional = ({ menus }) => {
  return (
    <div className="flex flex-col gap-2.5 items-center mb-8 ">
      <h3 className="text-xl min-[768px]:text-[28px] min-[1440px]:text-5xl font-semibold min-[1440px]:mb-6">
        Додатково
      </h3>
      <ul className="flex flex-col gap-3 min-[768px]:gap-[18px]">
        {menus.map(
          ({ title, volume, price, season, _id, type, description, image }) => {
            return type === "additional" ? (
              <li
                key={_id}
                className="w-70 h-10 min-[768px]:w-[420px] min-[768px]:h-12 min-[1440px]:w-[710px] min-[1440px]:h-[58px] border-2 p-3 rounded-[40px] min-[768px]:rounded-[14px] flex items-center gap-3"
              >
                <h4 className="font-semibold min-[768px]:text-2xl min-[1440px]:text-[30px]">
                  {title}
                </h4>
                <p className="min-[768px]:text-[22px] min-[1440px]:text-[24px]">
                  {price}
                </p>
              </li>
            ) : (
              ""
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Additional;
