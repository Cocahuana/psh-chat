import styled from "styled-components";

type ProfileImageProps = {
  alt: string;
  src: string;
  width?: string;
  height?: string;
};

const ProfilePicture = styled.img<{ width?: string; height?: string }>`
  width: ${(props) => props.width || "60px"};
  height: ${(props) => props.height || "60px"};
  border-radius: 50%;
`;

function ProfileImage(props: ProfileImageProps) {
  const { src, alt, width, height } = props;
  return <ProfilePicture src={src} alt={alt} width={width} height={height} />;
}

export default ProfileImage;
