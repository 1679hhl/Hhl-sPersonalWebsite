'use client';
import * as React from 'react';
import dynamic from 'next/dynamic';
import type { Template } from 'tinacms';
import { PageBlocksVideo } from '@/tina/__generated__/types';
import { Section } from '../layout/section';
import { sectionBlockSchemaField } from '../layout/section';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export const Video = ({ data }: { data: PageBlocksVideo }) => {
  if (!data.url) {
    return null;
  }
  return (
    <Section background={data.background!} className={`aspect-video ${data.color}`}>
      <ReactPlayer width='100%' height='100%' style={{ margin: 'auto' }} playing={!!data.autoPlay} loop={!!data.loop} controls={true} url={data.url} />
    </Section>
  );
};

export const videoBlockSchema: Template = {
  name: 'video',
  label: '视频',
  ui: {
    previewSrc: '/blocks/video.png',
    defaultItem: {
      url: 'https://www.youtube.com/watch?v=j8egYW7Jpgk',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: '颜色',
      name: 'color',
      options: [
        { label: '默认', value: 'default' },
        { label: '浅色', value: 'tint' },
        { label: '主色', value: 'primary' },
      ],
    },
    {
      type: 'image',
      label: 'URL',
      name: 'url',
      // @ts-ignore
      uploadDir: () => 'videos',
    },
    {
      type: 'boolean',
      label: '自动播放',
      name: 'autoPlay',
    },
    {
      type: 'boolean',
      label: '循环播放',
      name: 'loop',
    },
  ],
};