---
layout: page
title: Liste der Qualitätsstifter
permalink: /qualitaetsstifter/liste
lang: de
ref: quality-list
---

{% assign list = site.data.stifter %}
{% assign length = list.length %}
<ol>
{% for stifter in list reversed %}
{% include stifter.html %}
{% endfor %}
</ol>{: reversed="reversed"}


{% include founders.html %}