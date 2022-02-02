import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import background from "../assets/background3.png";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import "./DetailsCharacters.css";

const DetailsCharacters = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [detailPokemon, setDetailPokemon] = useState([]);
  const [detailPokemonSpecies, setDetailPokemonSpecies] = useState([]);

  /*************APPEL DETAIL API**************** */
  useEffect(() => {
    const appelDetail = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((res) => setDetailPokemon(res));
    };
    appelDetail();
  }, []);

  /*************APPEL DETAIL API SPECIES*************** */

  useEffect(() => {
    const appelDetailSpecies = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        .then((res) => res.json())
        .then((res) => setDetailPokemonSpecies(res));
    };
    appelDetailSpecies();
  }, []);

  return (
    <Dialog>
      <div className="blackContainer" onClick={() => navigate(-1)}></div>
      <div className="popUpModal">
        <div
          className="backgroundContainer"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="detailContainer">
            <div className="infoName">
              <h3 className="detailName">
                {detailPokemonSpecies.names !== undefined &&
                  detailPokemonSpecies.names
                    .filter((el) => el.language.name.includes("fr"))
                    .map((nom) => nom.name)}
                ㅤ
              </h3>
              <p className="numDex"> #0{detailPokemon.id}</p>
            </div>
            <div className="firstContainer">
              <div className="img">
                {detailPokemon.sprites !== undefined && (
                  <img
                    src={
                      detailPokemon.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt={detailPokemon.name}
                  />
                )}
              </div>
              <div className="holderDescription">
                <p className="description">
                  {detailPokemonSpecies.flavor_text_entries !== undefined &&
                    detailPokemonSpecies.flavor_text_entries
                      .filter((el) => el.version.name.includes("omega-ruby"))
                      .filter((el) => el.language.name.includes("fr"))
                      .map((desc) => desc.flavor_text)}
                </p>
                <div className="moreInfo">
                  <div className="div1">
                    <p>
                      Taille :{" "}
                      <span className="blackText">
                        {detailPokemon.height} cm
                      </span>
                    </p>
                  </div>
                  <div className="div2">
                    <p>
                      Poids :{" "}
                      <span className="blackText">
                        {detailPokemon.weight} hg
                      </span>
                    </p>
                  </div>
                  <div className="div3">
                    <p>
                      Catégorie :{" "}
                      <span className="blackText">
                        {detailPokemonSpecies.genera !== undefined &&
                          detailPokemonSpecies.genera
                            .filter((el) => el.language.name.includes("fr"))
                            .map((genre) => genre.genus)}
                      </span>
                    </p>
                  </div>
                  <div className="div4">
                    <p>
                      Taux de capture :{" "}
                      <span className="blackText">
                        {detailPokemonSpecies.capture_rate}
                      </span>
                    </p>
                  </div>
                  <div className="div5">
                    <p>
                      Nb de pas pour éclosion :{" "}
                      <span className="blackText">
                        {detailPokemonSpecies.hatch_counter}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="titleType">
                  <p>Type :</p>
                </div>
                <div className="holderType">
                  {detailPokemon.types !== undefined &&
                    detailPokemon.types.map((type) => (
                      <div className="typeFinal">
                        <p className={type.type.name}>{type.type.name}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte. Il n'a pas
              fait que survivre cinq siècles, mais s'est aussi adapté à la
              bureautique informatique, sans que son contenu n'en soit modifié.
              Il a été popularisé dans les années 1960 grâce à la vente de
              feuilles Letraset contenant des passages du Lorem Ipsum, et, plus
              récemment, par son inclusion dans des applications de mise en page
              de texte, comme Aldus PageMaker.
            </p>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DetailsCharacters;
