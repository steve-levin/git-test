{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # PRODUCTION QUALITY RULES\
\
---\
\
## RESPONSIVENESS\
\
- Mobile-first required\
- Must support all breakpoints\
\
---\
\
## PERFORMANCE\
\
- No unnecessary re-renders\
- Keep component tree shallow\
- Avoid heavy dependencies\
\
---\
\
## ACCESSIBILITY\
\
- Semantic HTML required\
- Keyboard navigation supported\
- Alt text required\
\
---\
\
## SEO READINESS\
\
- One H1 per page\
- Proper heading hierarchy\
- Semantic structure required\
\
---\
\
## DEPLOYMENT (VERCEL)\
\
Must pass:\
\
- npm install\
- npm run dev\
- npm run build\
\
No:\
- missing imports\
- console errors\
- dead code\
\
---\
\
## FINAL RULE\
\
Must be production deployable without cleanup.}