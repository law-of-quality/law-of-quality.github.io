---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: page
title: Theorie & Hinweise
permalink: /theorie/
---
Der Kapitalismus und sein primäres Medium – das Geld – haben dann ihre maximale Wirksamkeit entfaltet, wenn der monetäre Wert zum moralischen Wert wird und beide ineinander verschmelzen.

Wie schön sich das in der Kunst zeigen lässt! Die Beispiele in der bildenden Kunst liegen auf der Hand und müssen nicht nochmals erwähnt werden, doch auch die Neue Musik zehrt ihre qualitativen Urteile aus Quantitäten. Wie?

Exemplarisch ist Googles Suchalgorithmus. Er präferiert Quantitäten: eine Webseite erscheint dann weit vorne im Suchresultat, wenn sie mit anderen Webseiten verlinkt ist, die ihrerseits gut verlinkt sind. Was also zählt ist die Verlinkung, aber nicht der Inhalt einer Verlinkung. Wikipedia klärt uns auf:

*Die Linkpopularität ist ein Maßstab für die Anzahl und Qualität von Hyperlinks, die auf eine Webseite weisen. Je häufiger eine Seite verlinkt wird, desto höher ist die Linkpopularität dieser Seite.*

Ganz unverfroren wird hier Quantität mit Qualität gleich gesetzt: die Rede ist von der Qualität von (Hyper)links, die aus der Häufigkeit ihrer Verlinkung gemessen wird.

Das Resultat dieser Logik führt dann dazu, dass *immer mehr kommuniziert wird, dass nichts kommuniziert wird* (Georg Seeslen in Blödmaschinen.) Oder, wie es Jean Baudrillard bereits in den 80ern treffend auf den Punkt bringt: *Immer dort, wo nichts mehr ist, entsteht eine Art Überfülle* (Die fatalen Strategien).

Natürlich stehen auch die Akteure der Neuen Musik und ihre Werke im Einflussbereich dieser Logik. Ich zitiere nochmals Wikipedias Beschreibung von Googles Linkpopularität und ersetze die Begriffe:

*Die Relevanz zeitgenössischer Komponisten (und ihrer Werke) ist ein Maßstab für die Anzahl und Qualität ihrer Kontakte, die auf neue Kontakte weisen. Je häufiger ein Komponist kontaktiert wird, desto höher ist die Relevanz dieses Komponisten.*

oder wissenschaftliche Aufsätze:

*Die Relevanz wissenschaftlicher Aufsätze ist ein Maßstab für die Anzahl und Qualität von Zitaten, die auf neue Zitate verweisen. Je häufiger ein wissenschaftlicher Aufsatz zitiert wird, desto höher ist die wissenschaftliche Relevanz dieses Aufsatzes.*

Natürlich, das ist alles nichts neues, das gabs schon immer. Autoren wie Baudrillard zeigen jedoch auf, dass im Zustand völliger Entfesselung (das ist, wenn qualitative Massstäbe leer geworden sind) Quantität widerstandslos in Qualität umschlägt. Das wäre die totale Herrschaft der Hitparaden, Einschaltquoten und Marktwirtschaft. Aber auch die totale Herrschaft des korrupten Gentleman.

Natürlich, langsam findet ein Umdenken statt. Krisen helfen heilen. Aber nicht wie der Neoliberalismus meint, ohne reflexives Zutun. Paradoxien sollen entfaltet werden.

## Buchempfehlung:
{% assign sections = site.theorie-sections | sort: 'order' %} 
{% for section in sections %} 
{{section.content}}
{% endfor %}