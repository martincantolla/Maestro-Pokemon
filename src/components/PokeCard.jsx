import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function PokeCard() {
  const [pokeStats, setPokeStats] = useState();
  const { name } = useParams();

  useEffect(() => {
    const fetchPoke = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokeStats(response.data);
      } catch (error) {
        console.error("Error fetching pokemon", error);
      }
    };

    fetchPoke();
  }, [name]); // Include 'name' in the dependency array

  useEffect(() => {
    console.log(pokeStats);
  }, [pokeStats]); // Include 'pokeStats' in the dependency array

  return (
    <div className="PokeCard">
      <Card style={{ width: "36rem" }}>
        <Row>
          <Col>
            <Card.Img variant="top" src={pokeStats?.sprites?.front_default} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <ul>
                  <li>HP: {pokeStats?.stats[0].base_stat}</li>
                  <li>Attack: {pokeStats?.stats[1].base_stat}</li>
                  <li>Defense: {pokeStats?.stats[2].base_stat}</li>
                  <li>Sp. Attack: {pokeStats?.stats[3].base_stat}</li>
                  <li>Sp. Defense: {pokeStats?.stats[4].base_stat}</li>
                  <li>Speed: {pokeStats?.stats[5].base_stat}</li>
                  <li>Type: {pokeStats?.types[0].type.name}</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default PokeCard;
