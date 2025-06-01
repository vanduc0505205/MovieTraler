import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

type MovieSearch = {
  title: string;
  data: any[];
};

const MovieSearch = ({ title, data }: MovieSearch) => {
  const { handleTrailer } = useContext<any>(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-3xl mb-4">{title}</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {data &&
          data.map((item: any) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group"
              onClick={() => {
                handleTrailer(item.id);
              }}
            >
              <div className="cursor-pointer w-full h-full group-hover:scale-105 transition-transform duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover "
                />

                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieSearch;
