---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Home
class: home
---
{% include logo-clip.svg %}

{:.u-centered}
{% include logo-left.svg %}

{:.u-centered}
![Partitur](/assets/img/partitur-rahmen.jpg)

The Law of Quality bildet den Kunstmarkt ab: Ein Kunstwerk (die handgeschriebene Originalpartitur im Nussbaumrahmen) - mehrere 'Käufer' (wir nennen sie Qualitätsstifter!) - steigender Preis = steigende Qualität!

Interpreten, die das Musikstück aufführen, werden an den Umsätzen des Kunstwerks beteiligt.

Informationen siehe links unter: 
'Qualitätsstifter' und 'Interpreten'.

### Neue gewinnbeteiligte Interpreten: 
Mathias Monro Møller (Tenor) und Daniel Lorenzo (Piano) führten das Musikwerk am 19.9.2015 an der Kölner Musiknacht auf. Sie sind nun gewinnbeteiligte Interpreten. Wir gratulieren!

### Relation des Preisstandes und der Qualität

- Transaktion 1: $900: **Provinzkunst**{:.transaction--succeeded}
- Transaktion 2: $1'200: **Provinzkunst**{:.transaction--succeeded}
- Transaktion 3: $1'600: **Provinzkunst**{:.transaction--succeeded}
- Transaktion 4: $2'133: **Provinzkunst**{:.transaction--succeeded}
- Transaktion 5: $2'844: **Provinzkunst**{:.transaction--succeeded}
- Transaktion 6: $3'792: **Regionalkunst**{:.transaction--succeeded}
- Transaktion 7: $5'056: **Regionalkunst**{:.transaction--succeeded}
- Transaktion 8: $6'741: **Regionalkunst**
- Transaktion 9: $8'988: **Regionalkunst**
- Transaktion 10: $11'984: **Regionalkunst**

Freier Markt, [E-Mail hier senden](quality@patrickfrank.ch).

- $15'000 – $24'999: **Kleinstadtkunst**
- $25'000 – $34'999: **Stadtkunst**
- $35'000 – $49'999: **Grossstadtkunst**
- $50'000 – $99'999: **Metropolenkunst**
- ab $100'000: **Weltkunst**

<div class="ticker-wrap">
<div class="ticker">
  <div class="ticker__item">Aktuell!!</div>
    {% for item in site.data.tickers %}
  <div class="ticker__item">{{item}}</div>
    {% endfor %}
</div>
</div>