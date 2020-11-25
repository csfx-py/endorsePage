import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { Heading, Img, ImgWrapper, MainCol, MainRow, MainSect, Subtitle, TextWrapper, TopLine } from './MainElements';

const Main = ({
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) => {
    return (
        <>
            <MainSect lightBg={lightBg}>
                <Container>
                    <MainRow imgStart={imgStart}>
                        <MainCol>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </MainCol>
                        <MainCol>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </MainCol>
                    </MainRow>
                </Container>
            </MainSect>
        </>
    )
}

export default Main