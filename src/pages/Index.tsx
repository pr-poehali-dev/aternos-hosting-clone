import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [serverStatus, setServerStatus] = useState<'offline' | 'starting' | 'online' | 'queue'>('offline');
  const [queuePosition, setQueuePosition] = useState(0);

  const serverInfo = {
    name: 'MyMinecraftServer',
    players: '0 / 20',
    version: '1.20.1',
    software: 'Paper',
    slots: 20,
    ram: '2048 MB',
    storage: '4 GB'
  };

  const consoleLogs = [
    '[10:23:15] [Server thread/INFO]: Starting minecraft server version 1.20.1',
    '[10:23:16] [Server thread/INFO]: Loading properties',
    '[10:23:17] [Server thread/INFO]: Default game type: SURVIVAL',
    '[10:23:18] [Server thread/INFO]: Preparing level "world"',
    '[10:23:21] [Server thread/INFO]: Preparing start region for dimension minecraft:overworld',
    '[10:23:24] [Server thread/INFO]: Time elapsed: 3021 ms',
    '[10:23:24] [Server thread/INFO]: Done! For help, type "help"',
  ];

  const handleStartServer = () => {
    setServerStatus('queue');
    setQueuePosition(47);
    setTimeout(() => {
      setServerStatus('starting');
      setTimeout(() => {
        setServerStatus('online');
      }, 5000);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <nav className="bg-card border-b border-border sticky top-0 z-50 aternos-shadow">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-medium">ATERNOS</span>
              </div>
              {isLoggedIn && (
                <div className="hidden md:flex gap-6 text-sm">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Серверы</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Друзья</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Аккаунт</a>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              {!isLoggedIn ? (
                <>
                  <Button variant="ghost" size="sm">Вход</Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => setIsLoggedIn(true)}>
                    Регистрация
                  </Button>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <Icon name="User" size={20} className="text-muted-foreground" />
                  <span className="text-sm">username</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {!isLoggedIn ? (
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full mb-6">
                <Icon name="Server" size={48} className="text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold mb-4">Бесплатный хостинг серверов Minecraft</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Создай свой сервер Minecraft абсолютно бесплатно. Без регистрации банковских карт.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: 'Zap', title: 'Бесплатно навсегда', desc: 'Никаких скрытых платежей' },
                { icon: 'Users', title: 'Неограниченные слоты', desc: 'Играй с друзьями' },
                { icon: 'Clock', title: '24/7 доступность', desc: 'Запускай когда нужно' }
              ].map((feature, i) => (
                <Card key={i} className="p-6 bg-card border-border aternos-shadow hover:aternos-shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-12 h-14"
              onClick={() => setIsLoggedIn(true)}
            >
              Создать аккаунт
            </Button>

            <div className="mt-16 p-8 bg-card rounded-lg border border-border aternos-shadow">
              <h2 className="text-2xl font-bold mb-6">Почему Aternos?</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Полностью бесплатно</h4>
                      <p className="text-sm text-muted-foreground">Мы финансируемся за счёт рекламы, а не ваших денег</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Простое управление</h4>
                      <p className="text-sm text-muted-foreground">Интуитивная панель управления сервером</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Моды и плагины</h4>
                      <p className="text-sm text-muted-foreground">Поддержка Forge, Fabric, Spigot, Paper и других</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Автоматическое резервное копирование</h4>
                      <p className="text-sm text-muted-foreground">Ваш мир в безопасности</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{serverInfo.name}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Icon name="Users" size={16} />
                  {serverInfo.players}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Tag" size={16} />
                  {serverInfo.version}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Package" size={16} />
                  {serverInfo.software}
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-6 bg-card border-border aternos-shadow">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Управление сервером</h2>
                    <Badge 
                      className={`${
                        serverStatus === 'online' 
                          ? 'bg-primary/20 text-primary border-primary/30' 
                          : serverStatus === 'starting'
                          ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          : serverStatus === 'queue'
                          ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                          : 'bg-muted text-muted-foreground border-muted'
                      }`}
                    >
                      {serverStatus === 'online' && <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />}
                      {serverStatus === 'online' ? 'Онлайн' : 
                       serverStatus === 'starting' ? 'Запускается...' :
                       serverStatus === 'queue' ? 'В очереди' : 'Оффлайн'}
                    </Badge>
                  </div>

                  {serverStatus === 'queue' && (
                    <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon name="Clock" size={20} className="text-blue-400" />
                        <div>
                          <h3 className="font-medium">Ожидание в очереди</h3>
                          <p className="text-sm text-muted-foreground">Позиция: {queuePosition}</p>
                        </div>
                      </div>
                      <Progress value={(100 - queuePosition)} className="h-2" />
                    </div>
                  )}

                  {serverStatus === 'starting' && (
                    <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon name="Loader2" size={20} className="text-yellow-400 animate-spin" />
                        <div>
                          <h3 className="font-medium">Сервер запускается</h3>
                          <p className="text-sm text-muted-foreground">Пожалуйста, подождите...</p>
                        </div>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  )}

                  {serverStatus === 'online' ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-primary/10 border border-primary/30 rounded">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">IP адрес сервера:</span>
                          <Button size="sm" variant="ghost" className="h-7">
                            <Icon name="Copy" size={14} className="mr-1" />
                            Копировать
                          </Button>
                        </div>
                        <code className="text-lg font-mono text-primary">MyMinecraftServer.aternos.me</code>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          variant="destructive" 
                          className="flex-1"
                          onClick={() => setServerStatus('offline')}
                        >
                          <Icon name="Square" size={18} className="mr-2" />
                          Остановить
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="RotateCw" size={18} className="mr-2" />
                          Перезапустить
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 h-12 text-lg"
                      onClick={handleStartServer}
                      disabled={serverStatus === 'queue' || serverStatus === 'starting'}
                    >
                      <Icon name="Play" size={20} className="mr-2" />
                      Запустить сервер
                    </Button>
                  )}
                </Card>

                <Card className="p-6 bg-card border-border aternos-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Консоль</h2>
                    <Button size="sm" variant="ghost">
                      <Icon name="Download" size={16} />
                    </Button>
                  </div>
                  <div className="bg-black/80 rounded p-4 font-mono text-xs h-64 overflow-y-auto">
                    {serverStatus === 'offline' ? (
                      <div className="text-muted-foreground">Сервер остановлен. Запустите сервер для просмотра логов.</div>
                    ) : (
                      <div className="space-y-0.5">
                        {consoleLogs.map((log, i) => (
                          <div key={i} className="text-green-400/80">{log}</div>
                        ))}
                        {serverStatus === 'online' && (
                          <div className="text-green-400/80 animate-pulse">[10:23:25] [Server thread/INFO]: Server is running...</div>
                        )}
                      </div>
                    )}
                  </div>
                  {serverStatus === 'online' && (
                    <div className="flex gap-2 mt-4">
                      <Input 
                        placeholder="Введите команду..." 
                        className="flex-1 bg-secondary border-border"
                      />
                      <Button className="bg-primary hover:bg-primary/90">
                        <Icon name="Send" size={18} />
                      </Button>
                    </div>
                  )}
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-card border-border aternos-shadow">
                  <h2 className="text-lg font-bold mb-4">Информация</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Версия</span>
                      <span className="font-medium">{serverInfo.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Софт</span>
                      <span className="font-medium">{serverInfo.software}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Слоты</span>
                      <span className="font-medium">{serverInfo.slots}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">RAM</span>
                      <span className="font-medium">{serverInfo.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Хранилище</span>
                      <span className="font-medium">{serverInfo.storage}</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border aternos-shadow">
                  <h2 className="text-lg font-bold mb-4">Быстрые действия</h2>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Icon name="FileText" size={16} className="mr-2" />
                      Файлы
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Icon name="Package" size={16} className="mr-2" />
                      Плагины
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Icon name="Settings" size={16} className="mr-2" />
                      Настройки
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Icon name="Users" size={16} className="mr-2" />
                      Игроки
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Icon name="Database" size={16} className="mr-2" />
                      Резервные копии
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border aternos-shadow">
                  <h2 className="text-lg font-bold mb-4">Статус</h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Игроки онлайн</span>
                        <span>0 / 20</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Использование RAM</span>
                        <span>{serverStatus === 'online' ? '45%' : '0%'}</span>
                      </div>
                      <Progress value={serverStatus === 'online' ? 45 : 0} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Использование диска</span>
                        <span>1.2 / 4 GB</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-20 border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-sm">
              <div>
                <h3 className="font-bold mb-3">ATERNOS</h3>
                <p className="text-muted-foreground text-xs">
                  Бесплатный хостинг серверов Minecraft с 2013 года
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-3">Информация</h4>
                <div className="space-y-2 text-muted-foreground">
                  <a href="#" className="block hover:text-foreground">О нас</a>
                  <a href="#" className="block hover:text-foreground">Партнёры</a>
                  <a href="#" className="block hover:text-foreground">Вакансии</a>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Помощь</h4>
                <div className="space-y-2 text-muted-foreground">
                  <a href="#" className="block hover:text-foreground">FAQ</a>
                  <a href="#" className="block hover:text-foreground">Поддержка</a>
                  <a href="#" className="block hover:text-foreground">Форум</a>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Юридическое</h4>
                <div className="space-y-2 text-muted-foreground">
                  <a href="#" className="block hover:text-foreground">Условия</a>
                  <a href="#" className="block hover:text-foreground">Конфиденциальность</a>
                  <a href="#" className="block hover:text-foreground">Impressum</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>© 2024 Aternos. Minecraft is a trademark of Mojang AB.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
