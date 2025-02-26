'use client'

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

import Script from 'next/script'; // Импортируем компонент Script

const Home: NextPage = () => {
  return (
    <Box>
      {/* Добавляем скрипт KYU */}
      <Script src="https://knowyouruser.ru/js/analytics.js" strategy="afterInteractive" />
      <Script id="swetrix-init" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            swetrix.init('OuqBbVAVKQbu', {
              apiURL: 'https://api.knowyouruser.ru/log',
            });
            swetrix.trackViews();
          });
        `}
      </Script>

      <HeroSection />
      <TemplatesSection />
      <HighlightsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />

      {/* Добавляем noscript для поддержки отключенного JavaScript */}
      <noscript>
        <img
          src="https://api.knowyouruser.ru/log/noscript?pid=OuqBbVAVKQbu"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 10, lg: 20 }} pb="40">
        {/* Добавляем кликабельный текст с анимацией и градиентной рамкой */}
        <Box
          as="a"
          href="https://knowyouruser.ru/?utm_source=storely&utm_content=landing"
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize={{ base: 'sm', md: 'md' }} // Уменьшаем размер шрифта на мобильных устройствах
          fontWeight="normal"
          color="white"
          mb="8"
          p="2"
          borderRadius="15px"
          position="relative"
          transition="all 0.3s ease"
          _hover={{
            transform: 'translateY(-5px)',
            opacity: 0.9,
          }}
          mx="auto"
          width={{ base: '200px', md: '240px' }} // Уменьшаем ширину на мобильных устройствах
          bg="transparent"
          mt={{ base: '30px', lg: '3' }} // Съезжает вниз на мобильных устройствах
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '20px',
            border: '2px solid transparent',
            background: 'linear-gradient(45deg,rgb(13, 177, 203),rgb(158, 59, 251)) border-box',
            zIndex: -1,
            mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
          }}
        >
          Доступна интеграция с KYU
        </Box>

        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Продавай больше
                <Br /> Расти быстрее
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Storely — это платформа для создания и управления интернет-магазинами.
                <Br /> Мы предлагаем гибкость, масштабируемость и простоту использования.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                {/* <NextjsLogo height="28px" /> <ChakraLogo height="20px" /> */}
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink 
                  colorScheme="primary" 
                  size="lg" 
                  href="https://forms.gle/U83ke34xCjQDPkYM7" 
                >
                  Начать
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://cal.com/chelabov/30min"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Забронировать демо
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="110%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Скриншот интерфейса Storely"
                  quality="80"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Гибкость',
            icon: FiSmile,
            description: 'Настраивайте платформу под свои нужды. Добавляйте собственные функции и модули.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Масштабируемость',
            icon: FiSliders,
            description: 'Управляйте магазином любого масштаба — от локального до международного.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Простота',
            icon: FiGrid,
            description: 'Интуитивно понятный интерфейс для быстрого старта.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Экономия',
            icon: FiThumbsUp,
            description: 'Полнофункциональное решение по низкой цене.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};
const HighlightsSection = () => {
  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Основные возможности">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Storely предлагает все необходимое для создания и управления интернет-магазинами.
            <Br /> Управляйте товарами, заказами, складом и аналитикой в одном месте.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Готовые решения">
        <Text color="muted" fontSize="lg">
          Мы предлагаем готовые шаблоны для быстрого старта. Выберите подходящий и начните продавать уже сегодня.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Иван Петров"
        description="Владелец магазина"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.800', 'purple.400']}
      >
        <Text color="white" textShadow="0 2px 4px rgba(0, 0, 0, 0.5)"> {/* Тень текста */}
          “Storely помог нам запустить магазин за считанные дни. Очень удобный интерфейс и мощные функции.”
        </Text>
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Начните с Storely"
      >
        <Text color="muted" fontSize="lg">
          Мы позаботились обо всех базовых потребностях, чтобы вы могли сосредоточиться на развитии бизнеса.
        </Text>
        <Wrap mt="8">
          {[
            'Управление товарами',
            'Многоканальные заказы',
            'Управление складом',
            'Гибкие цены',
            'Мультивалютность',
            'Аналитика',
            'Продвинутые акции',
            'Интеграции',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Возможности
        </Heading>
      }
      description={
        <>
          Storely включает все необходимое для создания современного интернет-магазина.
          <Br /> Используйте его как основу для вашего бизнеса.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Управление товарами',
          icon: FiBox,
          description:
            'Создавайте детализированные страницы товаров, управляйте ассортиментом и категориями.',
          variant: 'inline',
        },
        {
          title: 'Многоканальные заказы',
          icon: FiLock,
          description:
            'Управляйте заказами через интернет, POS-системы и приложения.',
          variant: 'inline',
        },
        {
          title: 'Управление складом',
          icon: FiSearch,
          description:
            'Резервируйте заказы, управляйте запасами на нескольких складах.',
          variant: 'inline',
        },
        {
          title: 'Гибкие цены',
          icon: FiUserPlus,
          description:
            'Создавайте кампании, специальные цены для B2B и региональное ценообразование.',
          variant: 'inline',
        },
        {
          title: 'Аналитика',
          icon: FiFlag,
          description:
            'Отслеживайте ключевые метрики и принимайте обоснованные решения.',
          variant: 'inline',
        },
        {
          title: 'Интеграции',
          icon: FiTrendingUp,
          description:
            'Интегрируйтесь с инструментами аналитики.',
          variant: 'inline',
        },
      ]}
    />
  )
}

const TemplatesSection = () => {
  const templates = [
    {
      id: 1,
      name: 'SofaSocietyCo',
      image: '/static/screenshots/sofa_society.png',
      description: 'Диваны/Кровати/Столы/Стулья',
      link: 'https://fashion-starter.agilo.com/hr',
    },
    {
      id: 2,
      name: 'Solace',
      image: '/static/screenshots/solace.png',
      description: 'Диваны/Кровати/Столы/Стулья',
      link: 'https://solace-medusa-starter.vercel.app/de',
    },
  ];

  return (
    <Box id="templates" py="20">
      <Container maxW="container.xl">
        <Heading textAlign="center" mb="8">
          Готовые шаблоны
        </Heading>
        <Text textAlign="center" color="muted" fontSize="lg" mb="12">
          Выберите шаблон, который подходит вашему бизнесу.
        </Text>
        <Wrap spacing="8" justify="center">
          {templates.map((template) => (
            <Box
              key={template.id}
              as="a" // Делаем Box кликабельным
              href={template.link}
              target="_blank" // Открываем ссылку в новой вкладке
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)', cursor: 'pointer' }} // Анимация при наведении
              transition="all 0.2s"
            >
              <Image
                src={template.image}
                alt={template.name}
                width={400}
                height={300}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
              <Box p="6">
                <Heading fontSize="xl" mb="2">
                  {template.name}
                </Heading>
                <Text color="muted">{template.description}</Text>
              </Box>
            </Box>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title="Отзывы клиентов"
      columns={[1, 2]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        {/* НДС может применяться в зависимости от вашего местоположения. */}
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home