---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: page
title: Liste der Qualitätsstifter
permalink: /qualitaetsstifter/liste
---

{% assign list = site.data.stifter %}
{% assign length = list.length %}
<ol>
{% for stifter in list reversed %}
{% include stifter.html %}
{% endfor %}
</ol>{: reversed="reversed"}