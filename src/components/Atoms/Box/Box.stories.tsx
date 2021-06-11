import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Box, { BoxProps } from '.';
import { Container, Link } from '../../Atoms';

export default {
  title: 'Design System/Atoms/Box',
  parameters: {
    docs: {
      description: {
        component:
          'A container that lays out its contents in one direction. Box provides CSS flexbox capabilities for layout.',
      },
    },
  },
  args: {},
  argTypes: {
    direction: {
      description: 'The flex-direction CSS property.',
      table: {
        type: {
          summary: 'row | column | row-reverse | column-reverse',
        },
        defaultValue: {
          summary: 'row',
        },
      },
      control: {
        type: 'select',
        options: ['row', 'column', 'row-reverse', 'column-reverse'],
      },
    },
    gap: {
      description: 'The amount of spacing between child elements.',
      table: {
        type: {
          summary: 'xxsmall | xsmall | small | medium | large | xlarge',
        },
      },
      control: {
        type: 'select',
        options: ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
      },
    },
    margin: {
      description:
        'The amount of margin around the component. An object can be specified to distinguish horizontal margin, vertical margin, and margin on a particular side.',
      table: {
        type: {
          summary:
            'xxsmall | xsmall | small | medium | large | xlarge | none | object',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: {
        type: 'text',
      },
    },
    padding: {
      description:
        'The amount of padding around the box contents. An object can be specified to distinguish horizontal padding, vertical padding, and padding on a particular side of the box Defaults to none.',
      table: {
        type: {
          summary:
            'xxsmall | xsmall | small | medium | large | xlarge | none | object',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: {
        type: 'text',
      },
    },
    align: {
      description: 'How to align the contents along the cross axis.',
      table: {
        type: {
          summary: 'flex-start | center | flex-end | stretch',
        },
        defaultValue: {
          summary: 'stretch',
        },
      },
      control: {
        type: 'select',
        options: ['flex-start', 'center', 'flex-end', 'stretch'],
      },
    },
    justify: {
      description: 'How to align the contents along the main axis.',
      table: {
        type: {
          summary:
            'flex-start | center | flex-end | stretch | space-around | space-between | space-evenly',
        },
        defaultValue: {
          summary: 'stretch',
        },
      },
      control: {
        type: 'select',
        options: [
          'flex-start',
          'center',
          'flex-end',
          'stretch',
          'space-around',
          'space-between',
          'space-evenly',
        ],
      },
    },
    grow: {
      description: 'The flex-grow CSS prpperty.',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: {
        type: 'number',
      },
    },
    shrink: {
      description: 'The flex-shrink CSS prpperty.',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: {
        type: 'number',
      },
    },
    wrap: {
      description: 'The flex-wrap CSS propperty.',
      table: {
        type: {
          summary: 'wrap | wrap-reverse | nowrap',
        },
        defaultValue: {
          summary: 'nowrap',
        },
      },
      control: {
        type: 'select',
        options: ['wrap', 'nowrap', 'wrap-reverse'],
      },
    },
    inline: {
      description: 'If "true" the display property is "inline-flex".',
      table: {
        type: {
          summary: 'true | false',
        },
        defaultValue: {
          summary: 'false',
        },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<BoxProps> = args => (
  <div style={{ backgroundColor: 'burlywood' }}>
    <Container maxWidth="xl" disableGutters>
      <Box
        {...args}
        justify="space-between"
        wrap="wrap"
        style={{ border: '1px solid #888' }}
      >
        <Box padding="xsmall">Icon</Box>
        <Box padding="xsmall" gap="small">
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>About</Link>
          <Link>Contacts</Link>
        </Box>
        <Box padding="xsmall">More menu</Box>
      </Box>
    </Container>
  </div>
);

export const Default = Template.bind({});

Default.args = {};

export const Direction = Template.bind({});

Direction.args = {
  direction: 'column',
};

export const Gap: Story<BoxProps> = args => (
  <div style={{ backgroundColor: 'burlywood' }}>
    <Container maxWidth="xl" disableGutters>
      <Box justify="space-between">
        <Box padding="xsmall">Icon</Box>
        <Box {...args} padding="xsmall" style={{ border: '1px solid #888' }}>
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>About</Link>
          <Link>Contacts</Link>
        </Box>
        <Box padding="xsmall">More menu</Box>
      </Box>
    </Container>
  </div>
);

Gap.args = {
  gap: 'large',
};

export const Margin: Story<BoxProps> = args => (
  <div style={{ backgroundColor: 'burlywood' }}>
    <Container maxWidth="xl" disableGutters>
      <Box justify="space-between">
        <Box padding="xsmall">Icon</Box>
        <Box
          gap="small"
          {...args}
          padding="xsmall"
          style={{ border: '1px solid #888' }}
        >
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>About</Link>
          <Link>Contacts</Link>
        </Box>
        <Box padding="xsmall">More menu</Box>
      </Box>
    </Container>
  </div>
);

Margin.args = {
  margin: 'small',
};

export const Padding: Story<BoxProps> = args => (
  <div style={{ backgroundColor: 'burlywood' }}>
    <Container maxWidth="xl" disableGutters>
      <Box justify="space-between">
        <Box padding="xsmall">Icon</Box>
        <Box gap="small" {...args} style={{ border: '1px solid #888' }}>
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>About</Link>
          <Link>Contacts</Link>
        </Box>
        <Box padding="xsmall">More menu</Box>
      </Box>
    </Container>
  </div>
);

Padding.args = {
  padding: 'small',
};

export const Align: Story<BoxProps> = args => (
  <div style={{ backgroundColor: 'burlywood' }}>
    <Container maxWidth="xl" disableGutters>
      <Box
        {...args}
        justify="space-between"
        wrap="wrap"
        style={{ border: '1px solid #888', height: 100 }}
      >
        <Box style={{ border: '1px solid #888' }} padding="xsmall">
          Icon
        </Box>
        <Box style={{ border: '1px solid #888' }} padding="xsmall" gap="small">
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>About</Link>
          <Link>Contacts</Link>
        </Box>
        <Box style={{ border: '1px solid #888' }} padding="xsmall">
          More menu
        </Box>
      </Box>
    </Container>
  </div>
);
Align.args = {
  align: 'center',
};

export const Justify: Story<BoxProps> = args => (
  <div style={{ backgroundColor: 'burlywood' }}>
    <Container maxWidth="xl" disableGutters>
      <Box {...args} wrap="wrap">
        <Box padding="xsmall" style={{ border: '1px solid #888' }}>
          Icon
        </Box>
        <Box padding="xsmall" gap="small" style={{ border: '1px solid #888' }}>
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>About</Link>
          <Link>Contacts</Link>
        </Box>
        <Box padding="xsmall" style={{ border: '1px solid #888' }}>
          More menu
        </Box>
      </Box>
    </Container>
  </div>
);

Justify.args = {
  justify: 'center',
};

export const Grow: Story<BoxProps> = args => (
  <div style={{ backgroundColor: 'burlywood' }}>
    <Container maxWidth="xl" disableGutters>
      <Box justify="space-between" wrap="wrap" padding="xsmall">
        <Box {...args} style={{ border: '1px solid #888' }} padding="xsmall">
          Icon
        </Box>
        <Box padding="xsmall" gap="small">
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>About</Link>
          <Link>Contacts</Link>
        </Box>
        <Box padding="xsmall">More menu</Box>
      </Box>
    </Container>
  </div>
);

Grow.args = {
  grow: 1,
};

export const Shrink: Story<BoxProps> = args => (
  <div style={{ backgroundColor: 'burlywood' }}>
    <Container maxWidth="xl" disableGutters>
      <Box justify="space-between" padding="xsmall">
        <Box
          style={{ border: '1px solid #888', width: '100%' }}
          padding="xsmall"
        >
          Icon
        </Box>
        <Box
          {...args}
          padding="xsmall"
          gap="small"
          style={{ border: '1px solid #888', width: '100%' }}
        >
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>About</Link>
          <Link>Contacts</Link>
        </Box>
        <Box padding="xsmall" style={{ border: '1px solid #888' }}>
          More menu
        </Box>
      </Box>
    </Container>
  </div>
);

Shrink.args = {
  shrink: 2,
};

export const Wrap: Story<BoxProps> = args => (
  <div style={{ backgroundColor: 'burlywood', width: 300 }}>
    <Container maxWidth="xl" disableGutters>
      <Box
        {...args}
        justify="space-between"
        style={{ border: '1px solid #888' }}
      >
        <Box padding="xsmall">Icon</Box>
        <Box padding="xsmall" gap="small">
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>About</Link>
          <Link>Contacts</Link>
        </Box>
        <Box padding="xsmall">More menu</Box>
      </Box>
    </Container>
  </div>
);

Wrap.args = {
  wrap: 'wrap',
};

export const Inline: Story<BoxProps> = args => (
  <Box
    padding="xsmall"
    gap="small"
    {...args}
    style={{
      border: '1px solid #888',
    }}
  >
    <Link>Home</Link>
    <Link>Projects</Link>
    <Link>About</Link>
    <Link>Contacts</Link>
  </Box>
);

Inline.args = {
  inline: true,
};
