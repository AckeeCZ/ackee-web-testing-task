import React from 'react';

import Team from '../modules/references/Components/Team';

import Gallery, { GalleryLayout } from '../modules/references/Components/Gallery';
import TextContent from '../modules/references/Components/TextContent';
import HeroBanner from '../modules/references/Components/HeroBanner';
import CaseHeader from '../modules/references/Components/CaseHeader';

import socialPreview from '../../static/social-previews/critical-states.png';
import Seo from '../components/SEO';

const CASE_ID = 'criticalStates';
const MODULE_NAME = 'critical-states';
const IMAGE_PATH = `references/case-studies/${MODULE_NAME}`;

const colors = {
    primary: '#D32D41',
    primaryLighter: '#D6495A',
    grey: '#E5E6E8',
    textPrimary: '#fff',
    green: '#0CCE6B',
    red: '#EF2D56',
};

const team = [
    { department: 'references.case.team.management', names: ['Marek Přibáň'] },
    {
        department: 'references.case.team.design',
        names: ['Jiří Ryšánek'],
    },
    {
        department: 'references.case.team.android',
        names: ['Ondřej John', 'Michal Pešek'],
    },
    {
        department: 'references.case.team.ios',
        names: ['Jan Mísař', 'Jakub Olejník'],
    },
    {
        department: 'references.case.team.testing',
        names: ['Martina Perglerová'],
    },
];

const CriticalStates = () => {
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
                        src: `${IMAGE_PATH}/hero-image.png`,
                        style: { height: '60%', width: '100%', marginTop: '3rem' },
                    },
                }}
                background={colors.primary}
                textColor={colors.textPrimary}
                headerTheme="light"
            />
            <TextContent
                content={{
                    section: `case.${CASE_ID}.section1.name`,
                    title: `case.${CASE_ID}.section1.title`,
                    text: `case.${CASE_ID}.section1.text`,
                    category: 'category.other',
                    outputs: [
                        'references.case.output.design',
                        'references.case.output.android',
                        'references.case.output.ios',
                        'references.case.output.testing',
                    ],
                }}
            />
            <Gallery
                layout={GalleryLayout.EQUAL}
                content={[
                    {
                        background: colors.grey,
                        image: {
                            src: `${IMAGE_PATH}/gallery_1.png`,
                            style: {
                                width: '100%',
                                height: '100%',
                                display: 'block',
                                margin: 'auto',
                                marginBottom: '-15%',
                            },
                        },
                    },
                    {
                        background: colors.primaryLighter,
                        image: {
                            src: `${IMAGE_PATH}/gallery_2.png`,
                            style: { width: '85%', height: '85%', display: 'block', margin: 'auto' },
                            imgStyle: { objectFit: 'contain' },
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
                        background: colors.primary,
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
                layout={GalleryLayout.TWO_THIRDS}
                content={[
                    {
                        background: colors.primaryLighter,
                        image: {
                            src: `${IMAGE_PATH}/gallery_4.png`,
                            style: { width: '100%', height: '100%', display: 'block', margin: 'auto' },
                            imgStyle: { objectFit: 'cover' },
                        },
                    },
                    {
                        background: colors.grey,
                        image: {
                            src: `${IMAGE_PATH}/gallery_5.png`,
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
                            src: `${IMAGE_PATH}/gallery_6.png`,
                            style: { width: '90%', height: '90%', display: 'block', margin: 'auto', marginBottom: 0 },
                        },
                    },
                ]}
            />
            <Team content={team} />
        </>
    );
};

export default CriticalStates;
