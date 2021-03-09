import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ContainerComponent, { ContainerProps } from '.';
import { Heading, Text, Paragraph } from '../../Typography';

export default {
  title: 'Design System/Atoms/Container',
  parameters: {
    docs: {
      description: {
        component: 'The container centers your content horizontally.',
      },
    },
  },
  argTypes: {
    disableGutters: {
      description: "If 'true', the left and right padding is removed.",
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
    maxWidth: {
      description: 'Determine the max-width of the container.',
      table: {
        type: {
          summary: 'xs | sm | md | lg | xl',
        },
      },
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
  },
} as Meta;

const Template: Story<ContainerProps> = args => (
  <ContainerComponent {...args}>
    <Heading level="h1" variant="h2">
      Звёздная ночь освещает наши сны.
    </Heading>
    <Paragraph>
      Приятно, граждане, наблюдать, как непосредственные участники технического
      прогресса, превозмогая сложившуюся непростую экономическую ситуацию,
      объявлены нарушающими общечеловеческие нормы этики и морали.
      Предварительные выводы неутешительны: дальнейшее развитие различных форм
      деятельности напрямую зависит от направлений прогрессивного развития.
      Сложно сказать, почему элементы политического процесса подвергнуты целой
      серии независимых исследований. Внезапно, активно развивающиеся страны
      третьего мира смешаны с не уникальными данными до степени совершенной
      неузнаваемости, из-за чего возрастает их статус бесполезности. Следует
      отметить, что выбранный нами инновационный путь однозначно фиксирует
      необходимость стандартных подходов. Идейные
      <Text variant="strong"> соображения </Text>высшего порядка, а также
      убеждённость некоторых оппонентов в значительной степени обусловливает
      важность стандартных подходов. И нет сомнений, что диаграммы связей могут
      быть ограничены исключительно образом мышления. Принимая во внимание
      показатели успешности, дальнейшее развитие различных форм деятельности не
      оставляет шанса для приоритизации разума над эмоциями. И нет сомнений, что
      сделанные на базе интернет-аналитики выводы формируют глобальную
      экономическую сеть и при этом - объявлены нарушающими общечеловеческие
      нормы этики и морали. Приятно, граждане, наблюдать, как стремящиеся
      вытеснить традиционное производство,{' '}
      <Text variant="strong"> нанотехнологии </Text> представлены в
      исключительно положительном свете. С другой стороны, укрепление и развитие
      внутренней структуры в значительной степени обусловливает важность анализа
      существующих паттернов поведения.
    </Paragraph>
  </ContainerComponent>
);

export const Container = Template.bind({});

Container.args = {
  disableGutters: false,
};
