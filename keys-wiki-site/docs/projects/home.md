---
sidebar_label: 'Home'
sidebar_level: 1
sidebar_position: 0
---

import GradientHeading from '@site/src/components/core/GradientHeading';
import CenteredIntro from '@site/src/components/core/CenteredIntro';
import Card from '@site/src/components/core/Card';

<GradientHeading
  as="h1"
  gradientFrom="#338cf1"
  gradientMid="#27dafd"
  gradientTo="#8f43ec"
>
    # Keys' Project Gallery
</GradientHeading>

<CenteredIntro>
My personal project gallery where I showcase my pet projects!
</CenteredIntro>

<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  }}
>
  <Card
    href="/keys-personal-wiki/docs/projects/bella-assist/poster"
    title="Bella Assist"
    description="Shangar's personal assistant."
  />
  <Card
    href="/keys-personal-wiki/docs/projects/bella-assist/expense-manager/poster"
    title="Expense Manager"
    description="Shangar's Expense Manager."
  />
</div>
