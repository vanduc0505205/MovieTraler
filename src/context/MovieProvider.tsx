import { createContext, useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
type MovieProvider = {
  children: React.ReactNode;
};
type MovieContextType = {
  modalIsOpen: boolean;
  setModalIsOpen: (open: boolean) => void;
  trailerKey: string;
  setTrailerKey: (key: string) => void;
  handleTrailer: (id: number) => Promise<void>;
};
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const MovieContext = createContext<MovieContextType | undefined>(undefined);

const MovieProvider = ({ children }: MovieProvider) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  const handleTrailer = async (id: any) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrailerKey(data.results[0].key);
      setModalIsOpen(true);
    } catch (error) {
      console.log(error);
      setModalIsOpen(false);
    }
  };
  return (
    <div>
      <MovieContext.Provider
        value={{
          modalIsOpen,
          setModalIsOpen,
          trailerKey,
          setTrailerKey,
          handleTrailer,
        }}
      >
        {children}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              position: "fixed",
              zIndex: 9999,
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
          contentLabel="Example Modal"
        >
          <YouTube videoId={trailerKey} opts={opts} />;
        </Modal>
      </MovieContext.Provider>
    </div>
  );
};

export { MovieProvider, MovieContext };
