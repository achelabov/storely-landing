import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Цены',
  description: 'Единоразовый платёж или помесячная оплата',
  plans: [
    {
      id: 'basic',
      title: 'Базовый',
      description: 'Идеально для старта и небольших проектов.',
      price: '3.499₽/месяц',
      features: [
        {
          title: '1 интернет-магазин',
        },
        {
          title: 'Вся функциональность панели управления',
        },
        {
          title: 'Базовая аналитика',
        },
        {
          title: 'Выделенный сервер, администрирование',
        },
        {
          title: 'SLA ответа техподдержки до 24 часов',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'pro',
      title: 'Профессиональный',
      description: 'Для растущих бизнесов и команд.',
      price: '50.000₽ единоразово',
      isRecommended: true,
      features: [
        {
          title: 'Все функции из Базового тарифа',
        },
        {
          title: 'Продвинутая аналитика',
        },
        {
          title: 'Приоритетный доступ к обновлениям',
        },
        {
          title: 'SLA ответа техподдержки до 8 часов',
        },
      ],
      action: {
        href: 'https://forms.gle/U83ke34xCjQDPkYM7',
      },
    },
    {
      id: 'enterprise',
      title: 'Корпоративный',
      description: 'Индивидуальные решения для крупных компаний.',
      price: (
        <HStack>
          <Text fontSize="sm" color="gray.400">
            Индивидуальный расчет
          </Text>
        </HStack>
      ),
      features: [
        {
          title: 'Все функции из Профессионального тарифа',
        },
        {
          title: 'Персональный менеджер',
        },
        {
          title: 'Обучение и консультации',
        },
        {
          title: 'SLA ответа техподдержки до 1 часа',
        },
      ],
      action: {
        href: '#',
      },
    },
  ],
}