import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const servers = [
    { name: 'EU-West-1', status: 'online', players: 1245, load: 67 },
    { name: 'US-East-1', status: 'online', players: 892, load: 45 },
    { name: 'Asia-1', status: 'maintenance', players: 0, load: 0 },
    { name: 'EU-Central-1', status: 'online', players: 2103, load: 89 }
  ];

  const plans = [
    {
      name: 'Старт',
      price: '0',
      features: ['1 ГБ RAM', '10 ГБ SSD', '10 слотов', 'Базовая поддержка'],
      popular: false
    },
    {
      name: 'Про',
      price: '399',
      features: ['4 ГБ RAM', '50 ГБ SSD', '50 слотов', 'Приоритетная поддержка', 'Защита от DDoS'],
      popular: true
    },
    {
      name: 'Максимум',
      price: '999',
      features: ['16 ГБ RAM', '200 ГБ SSD', 'Безлимит слотов', 'VIP поддержка 24/7', 'Защита от DDoS', 'Выделенный IP'],
      popular: false
    }
  ];

  const consoleLogs = [
    '[12:34:56] [Server thread/INFO]: Starting minecraft server version 1.20.1',
    '[12:34:57] [Server thread/INFO]: Loading properties',
    '[12:34:58] [Server thread/INFO]: Preparing level "world"',
    '[12:35:01] [Server thread/INFO]: Done (3.452s)! For help, type "help"',
    '[12:35:15] [Server thread/INFO]: Player123 joined the game',
    '[12:35:42] [Server thread/INFO]: <Player123> Hello world!',
  ];

  return (
    <div className="min-h-screen">
      <nav className="glass-effect border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Server" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-gradient">GameHost</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Панель', 'Тарифы', 'Статус', 'FAQ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
              🚀 Запускай свой сервер за 60 секунд
            </Badge>
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 text-gradient leading-tight">
              Игровой хостинг нового поколения
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Мощные серверы, мгновенная установка, защита от DDoS и поддержка 24/7.
              Создай свой мир прямо сейчас!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-lg px-8 hover:opacity-90 glow-effect">
                <Icon name="Rocket" size={20} className="mr-2" />
                Создать сервер
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 hover:bg-white/5">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Zap', title: 'Мгновенный запуск', desc: 'Сервер готов за 60 секунд' },
              { icon: 'Shield', title: 'Защита DDoS', desc: 'Профессиональная защита 24/7' },
              { icon: 'Headphones', title: 'Поддержка', desc: 'Команда экспертов всегда на связи' }
            ].map((feature, i) => (
              <Card key={i} className="glass-effect p-8 hover:scale-105 transition-transform animate-scale-in border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 glow-effect">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="panel" className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-bold mb-4 text-gradient">Панель управления</h2>
            <p className="text-foreground/70 text-lg">Полный контроль над сервером в одном месте</p>
          </div>

          <Card className="glass-effect p-8 max-w-6xl mx-auto border-white/10">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-muted/30">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="console">Консоль</TabsTrigger>
                <TabsTrigger value="files">Файлы</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-muted/20 border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading font-semibold text-lg">Статус сервера</h3>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse-glow" />
                        Онлайн
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Игроки онлайн</span>
                        <span className="font-semibold">12 / 50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Версия</span>
                        <span className="font-semibold">1.20.1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Uptime</span>
                        <span className="font-semibold">24д 5ч</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-muted/20 border-white/10">
                    <h3 className="font-heading font-semibold text-lg mb-4">Ресурсы</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-foreground/70">CPU</span>
                          <span>45%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-accent w-[45%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-foreground/70">RAM</span>
                          <span>2.1 / 4 ГБ</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-secondary to-accent w-[52%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-foreground/70">Диск</span>
                          <span>15 / 50 ГБ</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-accent to-primary w-[30%]" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <Button className="bg-green-500 hover:bg-green-600">
                    <Icon name="Play" size={18} className="mr-2" />
                    Запустить
                  </Button>
                  <Button variant="destructive">
                    <Icon name="Square" size={18} className="mr-2" />
                    Остановить
                  </Button>
                  <Button variant="outline" className="border-white/20">
                    <Icon name="RotateCw" size={18} className="mr-2" />
                    Перезагрузить
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="console">
                <Card className="bg-black/40 p-6 border-white/10">
                  <div className="font-mono text-sm space-y-1 mb-4 h-64 overflow-y-auto">
                    {consoleLogs.map((log, i) => (
                      <div key={i} className="text-green-400/90">{log}</div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Введите команду..."
                      className="flex-1 bg-muted/20 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                    />
                    <Button className="bg-primary">
                      <Icon name="Send" size={18} />
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="files">
                <div className="space-y-2">
                  {['server.properties', 'plugins/', 'worlds/', 'config.yml', 'whitelist.json'].map((file, i) => (
                    <Card key={i} className="p-4 bg-muted/20 border-white/10 flex items-center justify-between hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <Icon name={file.includes('/') ? 'Folder' : 'FileText'} size={20} className="text-primary" />
                        <span className="font-mono">{file}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Icon name="Download" size={16} />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-bold mb-4 text-gradient">Тарифные планы</h2>
            <p className="text-foreground/70 text-lg">Выбери идеальный план для своего проекта</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <Card key={i} className={`glass-effect p-8 relative border-white/10 hover:scale-105 transition-transform ${plan.popular ? 'ring-2 ring-primary glow-effect' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent">
                    Популярный
                  </Badge>
                )}
                <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-foreground/70"> ₽/мес</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-green-400" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent' : ''}`}>
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="status" className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-bold mb-4 text-gradient">Статус серверов</h2>
            <p className="text-foreground/70 text-lg">Мониторинг работы всех дата-центров в реальном времени</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {servers.map((server, i) => (
              <Card key={i} className="glass-effect p-6 border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Server" size={24} className="text-primary" />
                    <h3 className="font-heading font-semibold text-lg">{server.name}</h3>
                  </div>
                  <Badge className={server.status === 'online' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}>
                    {server.status === 'online' && <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse-glow" />}
                    {server.status === 'online' ? 'Онлайн' : 'Обслуживание'}
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/70">Игроки онлайн</span>
                    <span className="font-semibold">{server.players}</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/70">Загрузка</span>
                      <span className="font-semibold">{server.load}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all ${server.load > 70 ? 'bg-red-500' : 'bg-gradient-to-r from-green-500 to-green-400'}`}
                        style={{ width: `${server.load}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-bold mb-4 text-gradient">Частые вопросы</h2>
            <p className="text-foreground/70 text-lg">Ответы на популярные вопросы о хостинге</p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {[
              { q: 'Как быстро активируется сервер?', a: 'Сервер активируется автоматически в течение 60 секунд после оплаты. Вы сразу получите доступ к панели управления.' },
              { q: 'Можно ли изменить тариф?', a: 'Да, вы можете в любой момент перейти на другой тариф. При повышении тарифа разница будет пересчитана пропорционально.' },
              { q: 'Есть ли защита от DDoS?', a: 'Все серверы защищены от DDoS-атак на аппаратном уровне. На тарифах Про и Максимум доступна усиленная защита.' },
              { q: 'Какие игры поддерживаются?', a: 'Мы поддерживаем Minecraft, CS:GO, Rust, ARK, Valheim и многие другие популярные игры.' },
              { q: 'Как связаться с поддержкой?', a: 'Поддержка доступна 24/7 через чат на сайте, email и Discord. Среднее время ответа - 5 минут.' }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass-effect mb-3 border-white/10 px-6 rounded-lg">
                <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-6">
          <Card className="glass-effect p-12 max-w-4xl mx-auto text-center border-white/10">
            <h2 className="text-5xl font-heading font-bold mb-4 text-gradient">Готов начать?</h2>
            <p className="text-foreground/70 text-lg mb-8">
              Присоединяйся к 10,000+ серверов уже работающих на нашей платформе
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-effect">
                <Icon name="Rocket" size={20} className="mr-2" />
                Создать сервер
              </Button>
              <Button size="lg" variant="outline" className="border-white/20">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
            <div className="flex gap-6 justify-center text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Github" size={24} />
              </a>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center text-foreground/60">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Server" size={18} className="text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-gradient">GameHost</span>
            </div>
            <p>© 2024 GameHost. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
