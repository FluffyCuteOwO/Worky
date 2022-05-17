// Импорт библиотек и классов
import {Composer, Markup} from "telegraf";

// Создаём новый Компостер (почти модульность бота 🙂)
let composer = new Composer();

// Действие бота на команду mainMenuButton
composer.action('mainMenuButton', async ctx => {
    return await ctx.reply("Выберите профессию", Markup
        .keyboard([
            ['🔍 Программист', '😎 Инженер'],
            ['☸ Электроснабжение', '📞 Админстратор баз данных'],
            ['📢 Специалист по телекомуникациям', '⭐️ Техник по комп.сетям', '👥 Share']
        ])
        .oneTime()
        .resize()
    )
})

// Импорт модуля
module.exports = composer