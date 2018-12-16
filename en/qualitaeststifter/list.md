---
layout: page
title: List of Quality Founders
permalink: /en/founders/list
lang: en
ref: quality-list
---

{% assign list = site.data.stifter %}
{% assign length = list.length %}
<ol>
{% for stifter in list reversed %}
{% include stifter.html %}
{% endfor %}
</ol>{: reversed="reversed"}