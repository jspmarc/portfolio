---
title: 8 Years of Programming
draft: false
date: 2026-11-15T16:23:00+09:00
description: A small story of my last 8 years learning to build software.
---

I have been programming since 2017 or 2018. It all started at the computer club
at my senior high school (or rather, computer extracurricular activity) where I
started with **Pascal**.

Back then, we didn't do any complex programming where we need to manage states
between multiple machines. We wrote code to display a running text on the
terminal or code to compute the factorial of a number. I wasn't even aware
`hashmap` was a thing!

Then when choosing university, I chose ITB (Bandung Institute of Technology,
one of the top universities in Indonesia). Originally, I wanted to go
to a mediocre university, get a degree in computer science/informatics, and be
done with it. But my friends started joking saying things like
"_Masuk ITB udeh_" (or something like "just enroll to ITB"). I was lucky enough
to be accepted and I enrolled to the informatics major on my 2nd year. First
year was something like 4th year of senior high school to "equalize" the playing
field between students (since some students come from better school than
others).

During my university years, I used a tonne of programming languages. It all
started with **Python** for statistics and for programming basics. Then on my 2nd
year of uni (the year my major started), I was asked to do _all_ of the most
common (and uncommon!) languages. In one course, I had to use **C** and in
another I had to use **Java**. I also had other courses where I had to use
[**Prolog**](https://www.swi-prolog.org/) and **Haskell**. For completeness'
sake, I will just mention other programming languages we had to use:
**TypeScript/JavaScript**, **PHP**, **C#**. (I hope I didn't miss anything.)

Honestly, I am surprised they didn't ask us to use Fortran lol.

But, being thrown to use a plethora makes sense because my professors always
emphasize:

> You all are studying here not to become a coder, but to be a programmer (_re: software engineer_).

Because of that, we still had tests where we needed to write code on _paper_ (yes,
literally by hand). And we weren't supposed to use actual programming
languages, we had to use an abstract language for pseudocode which the university
called _Notasi Algoritmik_ (literally Algorithm Notation). Which is basically
just Pascal with a bit different syntax and not compilable.

But honestly, I am grateful that my professors pushed us to learn programming
by pattern. Now, I can easily transition between languages and even
programming paradigms.

In any case, during my years of studying, I stumbled upon this legendary piece
of code called the
[**Fast Inverse Square Root**](https://en.wikipedia.org/wiki/Fast_inverse_square_root),
which is most often attributed to John Carmack. This function has always been
and will always be my favorite piece of code and something I hope I never have
to create myself.

```c
float Q_rsqrt( float number )
{
	long i;
	float x2, y;
	const float threehalfs = 1.5F;

	x2 = number * 0.5F;
	y  = number;
	i  = * ( long * ) &y;                       // evil floating point bit level hacking
	i  = 0x5f3759df - ( i >> 1 );               // what the fuck?
	y  = * ( float * ) &i;
	y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
//	y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

	return y;
}
```

> _It's beaut, isn't it?_

It's a function so beautiful and efficient that really sparked my love for writing
code and, to a degree, software engineering. Sadly (or fortunately, for some),
ChatGPT released in 2022 and Claude Sonnet 4 released in 2025.

At first, I hated AI-assisted programming as it's slow and often hallucinated,
but I finally took the red pill on 2025. At that time, I architected an
audit-log system and Sonnet helped by coming up with solutions in my design and
finding problems in design. Now, I have delegated most of my coding tasks to AI.

I am a bit sad that writing code is not something sustainable now (since I can never
match AI's velocity). But it is still something fun to do nonetheless and something
I still do from time to time, though, be it on LeetCode or on personal projects.

Well, I guess that's it for this post. I just want to talk about a little bit
of my programming journey for the past 8 years and I want to glaze Fast Inverse
Square Root algorithm publicly one more time.

Wishing all readers a good day, a good week, and a good life! :)
