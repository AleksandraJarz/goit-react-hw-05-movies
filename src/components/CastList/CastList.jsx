import PropTypes from 'prop-types';
import {
  List,
  CastMember,
  MemberName,
  MemberImage,
  MemberCharacter,
  MemberWrapper,
} from './CastListStyled';

const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(member => (
        <CastMember key={member.id}>
          <MemberWrapper>
            <MemberImage
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${member.profile_path}`}
              alt={member.original_name}
            />
            <MemberName>{member.name}</MemberName>
            <MemberCharacter>Character: {member.character}</MemberCharacter>
          </MemberWrapper>
        </CastMember>
      ))}
    </List>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      original_name: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired
  ),
};
export default CastList;
