import React from 'react';

import Team from '../modules/references/Components/Team';

import Gallery, { GalleryLayout } from '../modules/references/Components/Gallery';
import TextContent from '../modules/references/Components/TextContent';
import HeroBanner from '../modules/references/Components/HeroBanner';
import CaseHeader from '../modules/references/Components/CaseHeader';
import socialPreview from '../../static/social-previews/money-step.png';
import Seo from '../components/SEO';

const CASE_ID = 'moneyStep';
const MODULE_NAME = 'money-step';
const IMAGE_PATH = `references/case-studies/${MODULE_NAME}`;

const colors = {
    yellow: '#FFF500',
    grey: '#F8F8F8',
    green: '#0CCE6B',
    red: '#EF2D56',
};

const team = [
    { department: 'references.case.team.management', names: ['Marek Přibáň'] },
    {
        department: 'references.case.team.android',
        names: ['David Bilík', 'Eduard Ablekimov'],
    },
];

const MoneyStep = () => {
    return (
        <>
            <Seo image={socialPreview} pageId={CASE_ID} />
            <CaseHeader />
            <HeroBanner
                content={{
                    projectName: `case.${CASE_ID}.hero.project`,
                    projectTitle: `case.${CASE_ID}.hero.title`,
                    projectYear: `case.${CASE_ID}.hero.year`,
                    client: `case.${CASE_ID}.hero.client`,
                    image: {
                        src: `${IMAGE_PATH}/hero_image.png`,
                        style: { height: '70%', width: '100%', marginTop: '2rem' },
                        imgStyle: { objectFit: 'contain', objectPosition: 'center top' },
                    },
                }}
                backgroundImage={{
                    src: `${IMAGE_PATH}/hero-bg.png`,
                    imgStyle: { objectFit: 'contain', objectPosition: 'center center' },
                }}
                background={colors.yellow}
                textColor={'black'}
            />
            <TextContent
                content={{
                    section: `case.${CASE_ID}.section1.name`,
                    title: `case.${CASE_ID}.section1.title`,
                    text: `case.${CASE_ID}.section1.text`,
                    category: 'category.finance',
                    outputs: ['references.case.output.android', 'references.case.output.testing'],
                }}
            />
            <Gallery
                layout={GalleryLayout.EQUAL}
                content={[
                    {
                        background: colors.grey,
                        image: {
                            src: `${IMAGE_PATH}/gallery_1.png`,
                            style: { width: '80%', height: '90%', display: 'block', margin: 'auto', marginBottom: 0 },
                        },
                    },
                    {
                        background: '#A7D743',
                        image: {
                            src: `${IMAGE_PATH}/gallery_2.jpg`,
                            style: { width: '100%', height: '100%', display: 'block', margin: 'auto' },
                            imgStyle: { objectFit: 'cover' },
                        },
                    },
                ]}
            />
            <TextContent
                content={{
                    section: `case.${CASE_ID}.section2.name`,
                    title: `case.${CASE_ID}.section2.title`,
                    text: `case.${CASE_ID}.section2.text`,
                }}
            />
            <Gallery
                layout={GalleryLayout.EQUAL}
                content={[
                    {
                        background: colors.green,
                        image: {
                            src: `${IMAGE_PATH}/gallery_3.png`,
                            style: { width: '90%', height: '90%', display: 'block', margin: 'auto' },
                        },
                    },
                ]}
            />
            <TextContent
                content={{
                    section: `case.${CASE_ID}.section3.name`,
                    title: `case.${CASE_ID}.section3.title`,
                    text: `case.${CASE_ID}.section3.text`,
                }}
            />
            <Gallery
                layout={GalleryLayout.EQUAL}
                content={[
                    {
                        background: colors.yellow,
                        image: {
                            src: `${IMAGE_PATH}/gallery_4.png`,
                            style: { width: '90%', height: '90%', display: 'block', margin: 'auto' },
                        },
                    },
                ]}
            />
            <TextContent
                content={{
                    section: `case.${CASE_ID}.section4.name`,
                    title: `case.${CASE_ID}.section4.title`,
                    text: `case.${CASE_ID}.section4.text`,
                }}
            />
            <Gallery
                layout={GalleryLayout.EQUAL}
                content={[
                    {
                        background: colors.red,
                        image: {
                            src: `${IMAGE_PATH}/gallery_5.png`,
                            style: { width: '90%', height: '90%', display: 'block', margin: 'auto', marginBottom: 0 },
                        },
                    },
                ]}
            />
            <Team content={team} />
        </>
    );
};

export default MoneyStep;
