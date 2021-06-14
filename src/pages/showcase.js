import React from 'react';

import { injectIntl } from 'react-intl';

import Team from '../modules/references/Components/Team';

import Gallery, { GalleryLayout } from '../modules/references/Components/Gallery';
import TextContent from '../modules/references/Components/TextContent';
import HeroBanner from '../modules/references/Components/HeroBanner';
import Divider from '../modules/references/Components/Divider';
import Carousel, { DeviceType } from '../modules/references/Components/Carousel';
import CaseHeader from '../modules/references/Components/CaseHeader';

const team = [
    { department: 'references.case.team.management', names: ['Dominik Veselý'] },
    {
        department: 'references.case.team.backend',
        names: ['Štefan Prokop'],
    },
    {
        department: 'references.case.team.ios',
        names: ['Lukáš Hromadník'],
    },
    { department: 'references.case.team.web', names: ['Jiří Čermák', 'Filip Kubík'] },
    {
        department: 'references.case.team.android',
        names: ['Vlad Gorbunov', 'Georgyi Shur'],
    },
    {
        department: 'references.case.team.devops',
        names: ['Tomáš Hejátko'],
    },
];

const ShowCase = () => {
    return (
        <>
            <CaseHeader />
            <HeroBanner
                headerTheme="light"
                content={{
                    projectName: 'case.hopi.hero.project',
                    projectTitle: 'case.hopi.hero.title',
                    projectYear: 'case.hopi.hero.year',
                    client: 'case.hopi.hero.client',
                    image: {
                        src: 'references/case-studies/hopi/hero_device.png',
                        style: { height: '60%', width: '100%', marginTop: '3rem' },
                    },
                }}
                backgroundImage={{
                    src: 'references/case-studies/hopi/0_bg.png',
                    imgStyle: { objectFit: 'contain', objectPosition: 'center bottom' },
                }}
                background={'linear-gradient(0deg, #359056, #359056);'}
            />
            <HeroBanner
                content={{
                    projectName: 'case.weshare.hero.project',
                    projectTitle: 'case.weshare.hero.title',
                    projectYear: 'case.weshare.hero.year',
                    client: 'case.weshare.hero.client',
                    image: {
                        src: 'references/case-studies/weshare/hero_image.png',
                        style: { height: '70%', width: '100%', marginTop: '2rem' },
                        imgStyle: { objectFit: 'contain', objectPosition: 'center top' },
                    },
                }}
                backgroundImage={{
                    src: 'references/case-studies/weshare/hero_bg.png',
                    imgStyle: { objectFit: 'contain', objectPosition: 'left center' },
                }}
                background={'white'}
                textColor={'black'}
            />
            <Carousel
                deviceType={DeviceType.DESKTOP}
                background="#ffda58"
                textColor="#000"
                description="Description is the pattern of narrative development that aims to make vivid a place"
                slides={[
                    {
                        image: {
                            src: 'references/case-studies/test/carousel/desktop_1.jpg',
                            alt: 'alt1',
                        },
                        description: 'description1',
                    },
                    {
                        image: {
                            src: 'references/case-studies/test/carousel/desktop_1.jpg',
                            alt: 'alt2',
                        },
                        description: 'description2',
                    },
                    {
                        image: {
                            src: 'references/case-studies/test/carousel/desktop_1.jpg',
                            alt: 'alt3',
                        },
                        description: 'description3',
                    },
                ]}
            />
            <Gallery
                layout={GalleryLayout.EQUAL}
                content={[
                    {
                        background: '#A7D743',
                        image: {
                            src: 'references/case-studies/hopi/2_1.png',
                            style: { width: '80%', height: '90%', display: 'block', margin: 'auto' },
                        },
                    },
                    {
                        background: '#A7D743',
                        image: {
                            src: 'references/case-studies/hopi/2_1.png',
                            style: { width: '80%', height: '90%', display: 'block', margin: 'auto' },
                        },
                    },
                    {
                        background: '#A7D743',
                        image: {
                            src: 'references/case-studies/hopi/2_1.png',
                            style: { width: '80%', height: '90%', display: 'block', margin: 'auto' },
                        },
                    },
                ]}
            />
            <Divider height={20} />
            <Gallery
                layout={GalleryLayout.TWO_THIRDS}
                content={[
                    {
                        background: '#A7D743',
                        image: {
                            src: 'references/case-studies/hopi/2_1.png',
                            style: { width: '80%', height: '90%', display: 'block', margin: 'auto' },
                        },
                    },
                    {
                        background: '#00792C',
                        video: {
                            src: 'https://storage.googleapis.com/ackee-web-static/videos/case-studies/flashsport/notif.mp4',
                            width: 1120,
                            height: 920,
                        },
                    },
                ]}
            />
            <Divider height={20} />
            <Gallery
                layout={GalleryLayout.ONE_THIRD}
                content={[
                    {
                        background: '#A7D743',
                        image: {
                            src: 'references/case-studies/hopi/2_1.png',
                            style: { width: '80%', height: '90%', display: 'block', margin: 'auto' },
                        },
                    },
                    {
                        background: '#00792C',
                        image: {
                            src: 'references/case-studies/hopi/2_2.png',
                        },
                    },
                ]}
            />
            <Divider height={'1.25rem'} />
            <Gallery
                layout={GalleryLayout.EQUAL}
                content={[
                    {
                        background: '#00792C',
                        image: {
                            src: 'references/case-studies/hopi/3_1.png',
                            imgStyle: { objectPosition: 'right bottom' },
                        },
                    },
                    {
                        background: '#3BA562',
                        image: {
                            src: 'references/case-studies/hopi/3_2.png',
                            style: { width: '80%', height: '80%', margin: 'auto' },
                            imgStyle: { objectFit: 'contain' },
                        },
                    },
                ]}
            />
            <Divider height={'1.25rem'} />
            <Gallery
                fullHeight
                layout={GalleryLayout.EQUAL}
                backgroundImage={'references/case-studies/hopi/4_bg.jpg'}
                content={[
                    {
                        image: {
                            src: 'references/case-studies/hopi/4_1.jpg',
                            style: { width: '80%', height: '80%', display: 'block', margin: 'auto' },
                            imgStyle: { objectFit: 'contain' },
                        },
                    },
                ]}
            />
            <Divider height={'1.25rem'} />

            <Gallery
                layout={GalleryLayout.ONE_THIRD}
                content={[
                    {
                        background: '#37D47F',
                        image: {
                            src: 'references/case-studies/weshare/3_1.png',
                            imgStyle: { objectFit: 'contain', objectPosition: 'center bottom' },
                        },
                    },
                    {
                        background: 'white',
                        image: {
                            src: 'references/case-studies/weshare/3_2.jpg',
                            style: { width: '100%', height: '100%', display: 'block', margin: 'auto' },
                            imgStyle: { objectFit: 'cover' },
                        },
                    },
                ]}
            />
            <Divider height={'1.25rem'} />

            <Gallery
                layout={GalleryLayout.EQUAL}
                background={'#37D47F'}
                backgroundImage={{
                    src: 'references/case-studies/weshare/5_bg.jpg',
                    imgStyle: { objectFit: 'contain' },
                }}
                fullHeight
                content={[
                    {
                        image: {
                            src: 'references/case-studies/weshare/5_1.png',
                            style: {
                                width: '60%',
                                height: '60%',
                                margin: 'auto',
                            },
                            imgStyle: { objectFit: 'contain', objectPosition: 'center center' },
                        },
                    },
                ]}
            />
            <Divider height={'1.25rem'} />
            <Gallery
                layout={GalleryLayout.EQUAL}
                background={'#00AEE8'}
                fullHeight
                backgroundImage={{
                    src: 'references/case-studies/weshare/6_bg.png',
                    imgStyle: { objectFit: 'cover' },
                }}
                content={[
                    {
                        image: {
                            src: 'references/case-studies/weshare/6_1.png',
                            style: {
                                width: '100%',
                                height: '100%',
                                margin: 'auto',
                                marginBottom: '0',
                            },
                            imgStyle: { objectFit: 'contain', objectPosition: 'center bottom' },
                        },
                    },
                ]}
            />
            <TextContent
                content={{
                    section: 'sekce',
                    title: `Title title title with multiple bla bla`,
                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                    category: 'ahoj',
                    outputs: ['ios Aplikace', 'Android aplikace'],
                }}
            />
            <TextContent
                textColor={'blue'}
                columns={2}
                content={{
                    section: 'sekce',
                    title: `Title title title with multiple bla bla`,
                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                }}
            />
            <TextContent
                background={'linear-gradient(0deg, #359056, #359056);'}
                content={{
                    section: 'sekce',
                    title: `Title title title with multiple bla bla`,
                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                }}
            />
            <Team content={team} />
        </>
    );
};

export default injectIntl(ShowCase);
