import Link from 'next/link'
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { iconSchema } from '@/tina/fields/icon';
import { Button } from '@/components/ui/button'
import { PageBlocksCta } from '@/tina/__generated__/types';
import { Icon } from '../icon';
import { Section } from '../layout/section';

export const CallToAction = ({ data }: { data: PageBlocksCta }) => {
    return (
        <Section>
            <div className="text-center">
                <h2 className="text-balance text-4xl font-semibold lg:text-5xl" data-tina-field={tinaField(data, 'title')}>{data.title}</h2>
                <p className="mt-4" data-tina-field={tinaField(data, 'description')}>{data.description}</p>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    {data.actions && data.actions.map(action => (
                        <div
                            key={action!.label}
                            data-tina-field={tinaField(action)}
                            className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                            <Button
                                asChild
                                size="lg"
                                variant={action!.type === 'link' ? 'ghost' : 'default'}
                                className="rounded-xl px-5 text-base">
                                <Link href={action!.link!}>
                                    {action?.icon && (<Icon data={action?.icon} />)}
                                    <span className="text-nowrap">{action!.label}</span>
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}


export const ctaBlockSchema: Template = {
    name: "cta",
    label: "行动号召",
    ui: {
        previewSrc: "/blocks/cta.png",
        defaultItem: {
            title: "Start Building",
            description: "Get started with TinaCMS today and take your content management to the next level.",
            actions: [
                {
                    label: 'Get Started',
                    type: 'button',
                    link: '/',
                },
                {
                    label: 'Book Demo',
                    type: 'link',
                    link: '/',
                },
            ],
        },
    },
    fields: [
        {
            type: "string",
            label: "标题",
            name: "title",
        },
        {
            type: "string",
            label: "描述",
            name: "description",
            ui: {
                component: "textarea",
            },
        },
        {
            label: '操作按钮',
            name: 'actions',
            type: 'object',
            list: true,
            ui: {
                defaultItem: {
                    label: '按钮文本',
                    type: 'button',
                    icon: {
                        name: "Tina",
                        color: "white",
                        style: "float",
                    },
                    link: '/',
                },
                itemProps: (item) => ({ label: item.label }),
            },
            fields: [
                {
                    label: '文本',
                    name: 'label',
                    type: 'string',
                },
                {
                    label: '类型',
                    name: 'type',
                    type: 'string',
                    options: [
                        { label: '按钮', value: 'button' },
                        { label: '链接', value: 'link' },
                    ],
                },
                iconSchema as any,
                {
                    label: '链接',
                    name: 'link',
                    type: 'string',
                },
            ],
        },
    ],
};