import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ParagraphComponent, { ParagraphProps } from '.';

export default {
  title: 'Design System/Typography/Paragraph',
  parameters: {
    docs: {
      description: {
        component: 'A paragraph of text.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Applies the theme typography styles.',
      table: {
        type: {
          summary: 'body',
        },
        defaultValue: {
          summary: 'body',
        },
      },
      control: {
        type: 'select',
        options: ['body'],
      },
    },
    color: {
      description: 'The color of the component.',
      table: {
        type: {
          summary:
            'brandPrimary | brandSecondary | textPrimary | textSecondary | textDark | textLight | textGray',
        },
        defaultValue: {
          summary: 'textSecondary',
        },
      },
      control: {
        type: 'select',
        options: [
          'brandPrimary',
          'brandSecondary',
          'textPrimary',
          'textSecondary',
          'textDark',
          'textLight',
          'textGray',
        ],
      },
    },
    disableMargins: {
      description: "If 'true', the margins is removed.",
      table: {
        type: {
          summary: 'true | false',
        },
        defaultValue: {
          summary: false,
        },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<ParagraphProps> = args => (
  <ParagraphComponent {...args}>
    Приятно, граждане, наблюдать, как непосредственные участники технического
    прогресса, превозмогая сложившуюся непростую экономическую ситуацию,
    объявлены нарушающими общечеловеческие нормы этики и морали. Предварительные
    выводы неутешительны: дальнейшее развитие различных форм деятельности
    напрямую зависит от направлений прогрессивного развития. Сложно сказать,
    почему элементы политического процесса подвергнуты целой серии независимых
    исследований. Внезапно, активно развивающиеся страны третьего мира смешаны с
    не уникальными данными до степени совершенной неузнаваемости, из-за чего
    возрастает их статус бесполезности. Следует отметить, что выбранный нами
    инновационный путь однозначно фиксирует необходимость стандартных подходов.
    Идейные соображения высшего порядка, а также убеждённость некоторых
    оппонентов в значительной степени обусловливает важность стандартных
    подходов. И нет сомнений, что диаграммы связей могут быть ограничены
    исключительно образом мышления. Принимая во внимание показатели успешности,
    дальнейшее развитие различных форм деятельности не оставляет шанса для
    приоритизации разума над эмоциями. И нет сомнений, что сделанные на базе
    интернет-аналитики выводы формируют глобальную экономическую сеть и при этом
    - объявлены нарушающими общечеловеческие нормы этики и морали. Приятно,
    граждане, наблюдать, как стремящиеся вытеснить традиционное производство,
    нанотехнологии представлены в исключительно положительном свете. С другой
    стороны, укрепление и развитие внутренней структуры в значительной степени
    обусловливает важность анализа существующих паттернов поведения.
  </ParagraphComponent>
);

export const Paragraph = Template.bind({});

Paragraph.args = {};
