<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## アプリの概要

このアプリでは、サッカーの各試合に紐づけてコメント、感想を自由に残せるアプリになっています。試合日程をカレンダーに表示し、それを選択することで試合結果が表示され、コメントを書き込むページに遷移することが出来ます。コメントには、タイトルをつけることができ、試合に対する評価点も残すことが出来ます。これらのコメントは、他の人に公開するかしないかを選択することができるようにしています。これにより、他の人には見られたくないけど感想を残しておきたいという人と、是非他の人にも見てもらいたいという人の両方の人が使いやすいようになっています。


## 作成背景

私は、サッカーが観戦が好きで、時間があれば好きなチームの試合を見ていました。その中で、他のアプリなどで他者の試合に対する感想や意見などをよく目にしていました。そこで、もっと各試合に関して紐づけてコメントを書くことが出来れば、自分の中でのメモとしてもより充実したものになる上、他の人から見た時も、どの試合に対してのコメントなのかがわかりやすく、よりコメントを読みやすくなれると思いました。コメントの公開、非公開を選べるようにしたことで、他の人には読まれたくないという人にも使いやすいも担っていると思います。また、一つのアプリ内で、試合結果も見れるので、試合結果だけ確認したり、ついでにコメントを見るなどして使用していただければ、より楽しくサッカー観戦ができるのではないかなと思いました。

## テストアカウント
- ユーザーネーム: test
 
- メールアドレス: test@gmail.com
 
- パスワード: testtesst 

### 使用技術

## 使用言語・OS

## 機能一覧

## 特に力を入れた点

## 環境構築の手順
git clone https://github.com/a5pgm/calendar_app.git

composer require laravel/breeze --dev

php artisan breeze:install react 

npm install && npm run build

php artisan serve --port=8080

## Contributing
Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).
## Code of Conduct
In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).
## Security Vulnerabilities
If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.
## License
The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
