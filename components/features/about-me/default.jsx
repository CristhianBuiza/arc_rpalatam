import PropTypes from "prop-types";
import getProperties from "fusion:properties";
import { useAppContext } from "fusion:context";

const AboutMe = (props) => {
  const { arcSite } = useAppContext();
  const { nombre } = getProperties(arcSite);
  const {
    customFields: { isEnable, listPeople },
  } = props;
  return (
    <>
      <h2>Sobre mi</h2>
      {isEnable && (
        <p>
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          fugit!'
        </p>
      )}
    </>
  );
};

AboutMe.propTypes = {
  customFields: PropTypes.shape({
    isEnable: PropTypes.bool.tag({
      name: "Esta activo",
      description: "Esto se activara para tal cosa",
      defaultValue: false,
    }),
    listPeople: PropTypes.kvp.tag({
      name: "Lista de personas",
      description: "Lista de personas",
    }),
  }),
};

AboutMe.label = "Sobre Mi";

export default AboutMe;
