
		  ****** HACKING HORROR STORIES ******

These are the responses to my ARPANET post of 27 October 82. If reading 
any of the stories below inspires you to send your own, please do! I will
continue to update this file as long as macabre tales of men and their
machines continue to come in.

					- Brad

----Message 11 (1564 chrs) is----
Mail-From: local user X400BC70 at 27-Oct-82 19:26:55-EDT
Date: 27 October 1982 1917-EDT
From: Bob Colwell at CMU-10A
Subject: Re: Hacking horror stories
To: Brad.Allen@CMU-10A

Brad:
	When I was finishing my Master's here at CMU, we were using a
PDP-11/45 that was showing incipient senility.  One week before the final
demo, the RT-11 monitor stopped powering up properly and instead took to
halting the machine at some incredibly non-obvious spot.
	This was not acceptable performance, so we scratched our heads
faster and faster for about two days trying to fix it.  Finally, in 
desperation, we single-stepped the RT-11 boot sequence, and found that it
was doing a memory check that it believed was failing.  It then tried to
jump to a "memory check failed" diagnostic that it expected to find in
memory, which of course was not there.  What was there, however, was a
random collection of bits that just happened to look like a jump to the
original totally bogus location that we could see on the lights of the
front panel.  (Incidentally, we could read and write the supposedly bad
memory location using the front panel).  The solution?  We powered up the
machine with the halt switch asserted.  Then we loaded in a "Return from
Interrupt" instruction where the random bit collection was.  Presto.
By the way, until this problem occurred, we were competing for use of the
11/45 with two other groups of students.  Since they all gave up when 
this difficulty hit, we had sole use of the machine until it got officially
fixed.
	Bob
----Message 12 (993 chrs) is----
Mail-From: ARPANET host USC-ISIB received by CMU-10A at 27-Oct-82 20:08:14-EDT
Date: 27 Oct 1982 1708-PDT
From: Dave Dyer       <DDYER at USC-ISIB>
Subject: horrors
To: allen at CMU-10A


 On a tops-10 system I was responsible for, I made a typo installing
a bug fix to the monitor's file system code.  The result was that for
several days (until the file system began seriously degrading) a randomly
selected physical block of the disk was written with a copy of the
retrieval information for the system's accounting files.

 Another, we had installed a new memory box, which unknon to us
was responding with the wrong word once in 10^8 or so operations.
We ran with this flake for about a month before the bit decay was
tracked down to the culprit.  At that point, EVERYTHING that had
been done during the bad time was "possibly" damaged, and quite a few
were in fact damaged.  It took about a year before the last artifacts
of that episode were filtered out.

-------
----Message 13 (857 chrs) is----
Mail-From: ARPANET host MIT-ML received by CMU-10A at 27-Oct-82 20:37:13-EDT
Date: 27 October 1982 20:40-EDT
From: Peter Szolovits <PSZ at MIT-ML>
Subject:  Hacking horror stories
To: Brad.Allen at CMU-10A
cc: PSZ at MIT-ML

My first paying programming job was to convert some FORTRAN programs
from the 7094 to an IBM 360 in 1966 at UCLA.  Some of these were
unbelievably hairy (doing memory management within Fortran, character
manipulation before there were characters in Fortran, etc.) and obscure
(some of the code was in fact Fortran II code that first needed
conversion to Fortran IV).  The real horror was that my predecessor had
been taken away by the men in the white coats, and lived in a mental
hospital; so there really was no way to get any additional info on much
of this code, and I had a graphic example of where my job led.
----Message 14 (2082 chrs) is----
Mail-From: CMUFTP host CMU-CS-VLSI received by CMU-10A at 27-Oct-82 20:44:03-EDT
Date: 27 Oct 1982 20:30-EDT
From: James.Gosling at CMU-CS-VLSI at CMU-10A
Subject: Re: Hacking horror stories
To: Brad.Allen at CMU-10A
Message-Id: <82/10/27 2030.262@CMU-CS-VLSI>

Several years ago I was doing some development work on a compiler for a
language like Pascal.  And like most Pascal implementations, the
compiler was written in the same language and was used to compile
itself.  It was broken into many modules.  To make a change to the
compiler I would just recompile the affected module and link it back in
with the rest of the modules.  At some point, I took one of these test
versions of the compiler and replaced the production compiler with it
-- it seemed to be just fine.  In fact, it was fine for quite a while.
So long that this new version got onto the backups and all of the
backups of the production compiler were lost.  There was also the
problem that the old production compiler couldn't have compiled the new
compiler anyway, since the language had changed quite a lot.  Well...
In one of the modules that had never been through the new compiler was
a piece of code that tickled a bug in the code generator.  The bug was
a cooperative one between one of the new pieces of code and one of the
old one.  What I ended up with was a compiler which I couldn't
recompile because fixing the bug involved compiling a module that
tickled the bug.  Because of the circularity in the compiler (that it
compiled itself) I was up the proverbial creek without a paddle.  There
was no way that I could recompile or shuffle anything to fix the beast.
All backups were either of the broken compiler or had been overwritten.
The solution was incredibly messy: I spent a long time doing intensive
octal surgery on the object modules that I had.  This was made very
difficult because there was essentially no information left around to
correlate program text to compiled code and because the bug caused bad
code to be generated in many places.

				James.
----Message 15 (1169 chrs) is----
Mail-From: ARPANET host MIT-XX received by CMU-10A at 27-Oct-82 22:29:30-EDT
Date: 27 Oct 1982 2231-EDT
From: Larry Seiler <SEILER at MIT-XX>
Subject: Bug fix horror story
To: Allen at CMU-10A
cc: Seiler at MIT-XX

Maybe this is not quite what you have in mind, but in case it is...

My most painful bug was a simple uninitialized variable (I had moved
the initialization statement to a position after the first reference).
This variable was a pointer, and its position in the call stack just
happened to contain an address in code space.  So running the program 
caused certain instructions in a different procedure to be changed 
into noops, with bizarre results.  Loading the debugger caused the 
program to work correctly, by tranferring the target of the modification
into an unused part of the debugger (I think).  Even after I discarded my
innocent assumption that the code I wrote was the code that was being
executed, I still had to guess what routine was writing to code space
(and by what mechanism).  Total time required to fix the bug:  8 hours.

How embarrassing.  Why am I telling you this?  Well, why not?

Larry Seiler
-------
----Message 17 (1759 chrs) is----
Mail-From: ARPANET host Utah-20 received by CMU-10A at 28-Oct-82 02:11:44-EDT
Date: 28 Oct 1982 0012-MDT
From: JW-Peterson at UTAH-20 (John W. Peterson)
Subject: Re: Hacking horror stories
To: Brad.Allen at CMU-10A
cc: JW-Peterson at UTAH-20
In-Reply-To: Your message of 27-Oct-82 1516-MDT

In trying to learn the graphics/animation biz, I've run into a few.  In
making some films this summer I wound up working strictly at night, to
help prevent any light from entering the room.  The filming had to be
completed entirly over the weekend, so it would interfere with normal
bussiness activity (like turning the lights on...).  Worse yet the
old Bolex I was using had no way for the computer to trip it's shutter,
so I had to manually press the cable release every time the computer rang
the terminal bell; for several hours at a strech.

Some other animation stories: Before color graphics CRT's & framebuffers
were invented, the poor filmmaker had to sleep next to the camera.  When
the bell rang, he would wake up, change the color filter wheel to the
next primary color, backwind the film all the way, and go back to sleep...

Perhaps best of all is Jim Blinn's "Korean Janitor" movie.  During the
creation of the DNA sequences for "Cosmos", they decided to let the
camera run over night, with the computer tripping it every several
seconds.  So the locked up the room and put a big "Filming in process:
Do Not Enter" sign on the door.  Unfortunatly, the Korean janitor could
not read the english sign but DID have a pass key.  The resulting film
shows a DNA molecule twisting in space, a flood of light, and then a
jerkey sequence of the janitor cleaning the room at 200mph, seen as a
reflection in the screen.
jp
-------
----Message 19 (1595 chrs) is----
Mail-From: ARPANET host MIT-XX received by CMU-10A at 28-Oct-82 10:50:59-EDT
Date: 28 Oct 1982 1054-EDT
From: Geoffrey H. Cooper <GEOF at MIT-XX>
Subject: Re: Hacking horror stories
To: Brad.Allen at CMU-10A
cc: geof at MIT-XX
In-Reply-To: Your message of 27-Oct-82 1716-EDT

This is our favorite "what happens when people are taught higher level
models before the lower level ones" story.  I get this second hand,
so some of the details might be a little off.  It may not be of the sort
you had in mind, but it's amusing enough to bear repeating anyway.

Around here, we teach a course in software engineering in which the
students are taught and write programs in CLU (a language which lets user
defined abstractions work the same way that the language defined ones do).
One common final project for the course involved writing an assembler in
CLU.  The problem statement required that numbers be input and output in
octal, rather than decimal.

Most of the students, I am told, defined an OCTAL abstraction, with all the
normal integer arthmetic operations, and with Parse and Unparse operations
that converted strings into OCTAL's and back again.

This was implemented by representing an OCTAL as an array of integers, each
of which represented an octal digit.  The arithmetic operations simulated
octal arithmetic on this representation.  None of the students was
apparently aware that the normal integer data abstraction that they had
been using was really just stored as bits, which were more easily converted
to octal than decimal.

-Geof Cooper
-------
----Message 20 (1069 chrs) is----
Mail-From: ARPANET host CMU-20C received by CMU-10A at 28-Oct-82 10:57:26-EDT
Date: Thursday, 28 October 1982  10:57-EDT
From: Jon Webb <Webb at Cmu-20c>
To:   Brad.Allen at CMU-10A
Cc:   webb at CMU-20C
Subject: Hacking horror stories

Well, here it is: I was working as an undergraduate programmer at my
undergraduate university, and I basically had the run of the
time-sharing user interface (it was TSO, on an IBM 360/65).  I decided
it would be nice if you could edit lines you'd typed, like the facility
in the C-shell on unix except more primitive.  Well, it was a pretty
trivial change to allow this, but unfortunately to be effective the
change had to be installed in the system, I couldn't test it in advance.
So I installed it one night, and TSO wouldn't work anymore.  Very
embarassing, especially as the backup method I thought would work
didn't.  In fact one of the systems programmers had to be called in to
fix the system, in the middle of the night.  I gave up on editting in
TSO.  This is an argument for personal computers.

Jon
----Message 21 (910 chrs) is----
Mail-From: ARPANET host UCB-C70 received by CMU-10A at 28-Oct-82 11:57:13-EDT
Date: 28 Oct 1982 08:55:57-PDT
From: CSVAX.bitar@Berkeley
To: Brad.Allen@CMU-10A
Subject: Hacking horror story

I was working late one night developing a file under the Unix operating
system.  I was in a hurry at one point, and wanting to rename the file,
I executed the unix move cmd.
A moment later Unix complained of indigestion,
and I noticed that instead of typing 'mv oldname newname', which
is Unix's way of renaming a file, I had typed 'rm oldname newname'.
So Unix had executed 'rm oldname', then run into newname and vomited.
I nearly did the same.

Fortunately I did have a backup copy of the file, which I subsequently
re-editted, bringing it up to date.

After that incident, though, I was very careful about slight cognitive
mistakes, such as thinking 'move' (mv) and typing 'rm' (remove) instead.
----Message 22 (1801 chrs) is----
Mail-From: local user C410RF60 at 28-Oct-82 12:06:03-EDT
Date: 28 October 1982 1155-EDT
From: Robert Frederking at CMU-10A
Subject: Re: Hacking horror stories
To: Brad.Allen@CMU-10A

	Yourdon's book on software engineering has a few of these.  Most of
my really horrible experiences happened due to politics or manufacturer's
screw-ups.  
	(Example of first): CWRU was building a network, and had to pick between
DEC and Harris computers (Harris one because one of their VPs was a trustee
at CWRU - they were clearly inferior machines).  Besides teaching their staff
how to program, we had to constantly show them that feature X was broken, and
how to fix it.  The project finally collapsed due to their crufty machines.
The operating system was *not* virtual memory (altho user space was), and while
adding networking software to their OS, they ran out of room.  "Sorry".
	(Example of second): in trying to microprogram Intel's hack-of-a-
bit-slice-machine, you had to fit your instructions into a 2-dimensional address
space!  Some instructions could only branch in rows, others only in columns,
yet others only to specific clusters of locations.  It was clearly a hack
to cover running out of instruction bits.  They even had to sell a program
designed to find a fit for your microcode to the available space (I think
the problem is NP-complete - 2d bin packing).
	The best example is the interupt disable instruction on the 6800.
If the least significant bit of the *preceding* instruction is 1, the whole
processor hangs when you try to disable the interupt.  Also, some of the
illegal opcodes (which aren't masked out) will cause the processor to hang
so badly, it can't be reset.  You have to turn it off, and wait for the
dynamic RAM register to fade out!

	Bob
----Message 24 (1536 chrs) is----
Mail-From: CMUFTP host CMU-CS-Speech received by CMU-10A at 28-Oct-82 14:51:46-EDT
Date: 28 Oct 1982 14:47:27-EDT
From: David.Cunnius at CMU-CS-SPEECH at CMU-10A
To: Allen@CMU-10A
Subject: Hacking horrors

	The old 15-311, Software Engineering Methods, will probably be one of
the more fertile sources of horror stories. The semester I took this course,
Spring '80, one of the tasks was a database implementation for a science-
fiction wargame. Looking back now, I think our project group was doomed from
the start. Of the original five-man team, one dropped the course before anyone
else even met him, one had to take some time off to deal with a family crisis
around mid-term, and one simply disappeared for a period of three weeks, coming
back without even a memory of where he'd been. Despite all that, we did get
something together for the final demo. We were using a modular design and had
divided the task into thirteen subtasks. At the demo, four of the thirteen
modules worked properly, two that had tested out perfectly the previous day
didn't work at all at the demo, and most of the other seven hadn't even been
coded yet. Of the four modules that worked, the most impressive one was the
display package; unfortunately, that was also the only module which was
optional in the original specification. Two of the members of the group
somehow managed to pull 'D's as our final grade; to this day I haven't had the
nerve to ask the other two what their grades were.
					Dave Cunnius (dac@CMU-CS-Speech)
----Message 25 (2873 chrs) is----
Mail-From: ARPANET host Washington received by CMU-10A at 28-Oct-82 16:18:31-EDT
Date: 28 Oct 1982 1318-PDT
From: Bob Bandes <JUGGLE at WASHINGTON>
Subject: Re: Hacking horror stories
To: Brad.Allen at CMU-10A
In-Reply-To: Your message of 27-Oct-82 1416-PDT


As a senior project when I was going to school at UC Santa Cruz,
I put together a real-time voice controlled operating system.
The entire thing was written in assembly language on a PDP-11/32
running RT11.  Since this was a single user system with a fixed
disk, it was necessary to make a tape backup at the end of every
session.

Well, after one particularly furious day of hacking, I decided to
write my backup tape and go home for the day.  My normal procedure
was to mount my backup tape and use ROLLIN to copy an entire
disk-image to the tape.  Unbeknownst to me, the procedure that
I used had the effect of first initializing the tape before
making the backup.

This had always worked just fine.  But on this particular day, I
had been working on my disk I/O routines and apparently had somehow
managed to write garbage on some unknown portion of the disk.
I had no idea that anything was wrong as I went to make my backup
tape.  As usual, first the tape was initialized, then, as ROLLIN
began to write the disk image, the program hung!  There I was
with no backup tape and having major problems making a backup.

My next move was to panic.  After settling down somewhat, I tried
rebooting the operating system and making the backup again.
Still the same problem.  Then I remembered about the DECtape
drive on the machine.  If I could only find a DECtape and manage
to individually tranfer the files that I needed I would be home
free.

I ran over to the cabinets and began frantically looking for DECtapes.
AHA!  I found one!  As I ran back over to the computer, I took a
bounding step and landed on the side of my ankle.  I proceeded
to lie on the floor writhing and screaming in agony for the next
fifteen minutes.  "This just isn't my day,"  I was saying to myself.
When the pain began to subside I tried to get up.  I couldn't walk
on the ankle since it hurt so much.  So I hopped over to the DECtape
drive and mounted the DECtape.  Then I hopped over to console and
sat down.

At least something went right that day, as the machine allowed me
(without hanging) to individually transfer all my files to DECtape.
I then read a clean version of the operating system onto the disk
and proceeded to tranfer all of my files from DECtape back onto
the disk.  This time all went normally with the magtape backup and
the world was safe again for future hacking.

Fortunately my ankle wasn't broken.  It was only severly sprained.
For the next few weeks I was forced to do my hacking with an
ace-bandage wrapped around my ankle.

--Bob Bandes
-------
----Message 29 (721 chrs) is----
Mail-From: ARPANET host UCB-C70 received by CMU-10A at 28-Oct-82 23:30:51-EDT
Date: 28 Oct 1982 20:26:51-PDT
From: Kim.norvig@Berkeley
To: brad.allen@cmu-10a
Subject: Re: Hacking horror stories

Lucky for me, most of the stories I remember are happy ones, not horror stories.
My favorite story about someone else is when Jim Meehan was writing TALESPIN,
his AI program that generated stories, mostly about birds and bears
running around the forest.  One story started off fine, then started to
slow down, and finally ended with the line
	Joe Bear thinks that FREE STORAGE IS EXHAUSTED
Oh well, @b(I) thought it was cute.

Can I be put on the mailing list to see your collection of anecdotes?

program to
----Message 33 (1413 chrs) is----
Mail-From: ARPANET host MIT-MC received by CMU-10A at 30-Oct-82 16:38:45-EDT
Date: 30 Oct 1982 1635-EDT
From: RG.JMTURN at MIT-OZ at MIT-MC
Subject: Re: Hacking horror stories
To: Brad.Allen at CMU-10A
In-Reply-To: Your message of 27-Oct-82 1832-EDT

The experience that still makes my skin crawl is the time I was debugging
some Lisp Machine board at the MIT AI lab. I had spent several hours trying
to isolate a noisy signal which seemed to be tied to another one, but I could
not find a common wire and I had replaced all the common chips. In desperation,
I pulled out the the board and yanked the extender, about to give up hope.
As I stared down at the extender, I muttered some curse to the designers
of the machine...and noticed a solder splash on the extender shorting two
lines! For ghu's sake, if you can't trust your tools, what can you trust.

On the other hand, for an example of the other extreme, this week, I was
in Montreal doing an installation for Lisp Machine, Inc. A crufty Bus
Interface seemed to be making the machine go 1/2 speed, and sometimes
fail entirely. The person I was working with and I decided to call it a day
around 5, and go to our hotel. When we came back the next morning, the machine
worked perfectly. The best we can figure it, the machine wanted us to be
able to have a night in Montreal, and the afternoon the next day...


					JAmes
-------
----Message 38 (1003 chrs) is----
Mail-From: ARPANET host UCB-C70 received by CMU-10A at 1-Nov-82 23:02:54-EST
Date: 30 Oct 1982 03:44:28-PDT
From: CSVAX.fishkin@Berkeley
To: Allen@CMU-10A
Subject: painful hacks

	Hi there,
My name is Ken Fishkin, and I'm a grad at Berkeley. My most painful hack
occured while hacking a 6K line C database program at the University
of Wisconsin-Madison as an undergrad.  My program worked perfectly, with
all debug prints on.  When I set my 'const' debug to false, however,
the program would crash!  To make things even more fun, if I deleted
1 debug print the program would still run correctly, but if I deleted
another instead it wouldn't!  I wound up doing a sort of tree traversal,
individually deleting some 200! debug prints individually, finding the
proper sequence of delete-compile-delete that would keep my program
intact. To this day, I still have no idea what was wrong with the
program.
	If possible, could you mail me your final collection of
horrible hacks?

			Ken
----Message 40 (1981 chrs) is----
Mail-From: ARPANET host CMU-20C received by CMU-10A at 2-Nov-82 11:29:15-EST
Date:  2 Nov 1982 1128-EST
From: MASON at CMU-20C
Subject: horror stories
To: brad.allen at CMU-10A

Many roboticists have reported the following demo problem:  when
filming or demonstrating, we often raise venetian blinds, turn on
the lights, or bring in floods.  The increase in ambient light
may cause optical-interrupt type sensors on the robot to stop
functioning, and the heat from floods may affect other components
of the system.  Thus a system which has functioned flawlessly for
months begins to malfunction the very minute the generals arrive.

Real-time programming has its special frustrations, but the most
difficult bugs arise from difficulties in the timing of process 
interactions.  Most of these are too complicated to make good stories.
One of the most confusing PDP11 bugs I had may be worth telling.
When a byte is pushed onto the stack, the stack pointer is first 
incremented to keep the pointer at word boundaries.  Hence the
odd byte is garbage, left over from no-longer-active stack frames.
I had a program which pushed a byte, but popped a word, thus accessing
this garbage.  Even careful inspection of the code didn't turn up
this violation of stack discipline.  The worst part is that the 
manifestation of the bug would vary depending on which process last
used the stack.  In particular, the bug became invisible when
single-stepping with our symbolic debugger---the debugger (im)providentially
cleared the relevant byte in the act of saving some registers.

This reminds me of another PDP11 bug.  Our 11/40 had a micro-code
error.  The SOB instruction (subract one and branch, used for simple loops)
didn't test the TRAP bit, which is used by debuggers for single-stepping.
Hence, when single-stepping, the programmer was not shown the instruction
following the SOB.  It was executed "in secret", with very confusing results.

-------
----Message 32 (621 chrs) is----
Mail-From: ARPANET host MIT-XX received by CMU-10A at 3-Nov-82 15:20:23-EST
Date: 2 Nov 1982 17:19:35-EST
From: jfw at mit-vax at mit-xx
To: allen@cmu-10a
Subject: Programming horror stories

Two summers ago, while I was working on an improvement to our UNIX at LL-ASG,
I fired up a test version a little too fast, and watched with puzzlement as
the filesystem check program started printing out random things.  I wound up
killing a 100Mb filesystem full of useful things.  After 2 weeks of poring over
the code I wrote which did that, I found the bug:  " = " instead of " |= ".
One character did all that...

----Message 37 (1934 chrs) is----
Mail-From: local user C410MS40 at 4-Nov-82 00:37:41-EST
Date:  4 November 1982 0036-EST (Thursday)
From: Mark.Sherman at CMU-10A
To: Brad.Allen at CMU-10A
Subject: Re: Hacking Horror Stories
Message-Id: <04Nov82 003626 MS40@CMU-10A>

As an undergrad I worked as a systems staff on a time sharing system
that resembled Multics (called DSL/TSS - think of it as Unix on HP21
series machines).  On such systems, the login program is like any other
program; when a user sits down he "calls" this program from a
predefined file system path to gain access to the system.  For some
unrememberable reason, I had to make some modifications to this
program, did so, and installed the new version.  The only real way to
try this program out was to log out and then log back in.  Having logged
out, I tried to log back in.  To my chagrin, I had accidently set the
protection on the new login program to read instead of its normal
read-execute.  Thus the system refused to run the login program.  By
S.O.P., this would not be a problem - when doing such a drastic change,
we always made sure that at least one other systems programmer was
logged in so that he could patch anything that was necessary, like
changing access control on the login program.  Before my attempt to
change the login program, there were two other systems programmers
logged in.  After my mistake, I walked over to the two other staff
people only to find that they had both logged out - after all each knew
that the other was logged in and so saw no reason to stay on as the
"protection".  Thus there was no way to log into the system and no way
to patch it while it ran.  We had to move the system to a spare disk,
boot a backup system, bring up the extra disk with the file system
containing the bogus protection as a "raw" disk and use a special disk
utility to set the one necessary bit giving execute access to the login
program.

Mark
----Message 38 (3657 chrs) is----
Mail-From: ARPANET host CMU-20C received by CMU-10A at 4-Nov-82 01:40:45-EST
Date: Thursday, 4 November 1982  01:39-EST
From: Skef Wholey <Wholey at CMU-20C>
To:   Brad.Allen at CMU-10A
Subject: Horrorful horrors

CMU's 15-311 is indeed a source of horrors, and I experienced a rather horrible
in that class last year.  There were five of us in our group, which we called
"SPAM", each of us competent hackers.  Our project was a 68000 simulator and
debugger, which would run 68000 machine code and let you look at registers and
memory and so forth.  Our work progressed on schedule (with the aid of many
all-nighters), and we were able to run simple assembly language programs just
about a week before the demo.

Being a rather noisy bunch, wanting our demo to be as slick as possible, we
decided that we'd run a backgammon program written in C compiled with cc68.  We
had used small programs compiled with cc68 to test the simulator.  The programs
were small enough to compile and assemble on a Vax, print the hex object code,
and type it into file which we would load into our simulator.  The backgammon
program was too large for this, obviously, so the object code was FTP'ed to
another machine, put on tape, and brought to the Computation Center, where we
pulled it off of tape and loaded it into our simulator.  The program didn't
work.  It didn't work the day before the demo.

We found a few bugs in our simulator, but worst yet we found bugs in the cc68
compiler, now N machines away.  Fixing these we found bugs in the game playing
program itself.  Compiling the program on the Vax and transporting the object
code was out of the question at this point -- too little time left before the
demo (we had all announced that we'd appear in coat and tie).  So we ever so
carfully patched the hex files, and voila!  The program ran beautifully.

That year Comp Center gave each undergrad who needed a computer account an
account on each undergrad machine (TOPS-D and TOPS-E).  These machines were on
Comp Center's DECnet: not a reliable network at that time.  We had the current
version of our system and the patched hex files on TOPS-D, because the load was
lower there that night, but were scheduled to demo on TOPS-E terminals.  DECnet
was, of course, down for quite a while, but finally came up.  We quickly
transferred the current system to the E and ran back to our rooms or homes to
shower and dress.

We marched triumphantly into the terminal room and sat at our terminals while
our SPAMmascots fed cookies to the waiting crowd and our professor.  The system
came up fine, and we demonstrated how to deposit into and read from memory and
registers before moving onto the demo programs.  We loaded the hex files, set
breakpoints at our test locations, and lo!  IT DIDN'T WORK.  We were all
somewhat bummed and embarrassed, and managed to muddle through at the mercy of
this mysterious adversary that had destroyed a system that worked an hour
before.  The professor suggested that we get our act a little more together and
have a somewhat less flashy demo in his office a few days hence.

The problem: we had neglected to copy the patched hex files from the D to the
E.  We were demoing buggy 68000 code.  The second demo went a bit better.  We
now laugh about the first.  Comp Center no longer gives out accounts to one
student on more than one machine.  Good idea.

--Skef

[What be your motive for knowin' this stuff, eh?  Doo ye like to feed on
 stories o' suffrin'?  Are ye writin' a book?  I enjoyed reading those sent to
 you so far and enjoyed sending you this one.  Good topic.]

----Message 39 (1236 chrs) is----
Mail-From: CMUFTP host CMU-CS-VLSI received by CMU-10A at 4-Nov-82 09:40:16-EST
Date: 4 Nov 1982 8:36-EST
From: Ed.Frank at CMU-CS-VLSI at CMU-10A
Subject: Hacking horror stories
To: Brad.Allen@cmua
Message-Id: <82/11/04 0836.841@CMU-CS-VLSI>

While working on the software for a Graphics terminal we built at
Stanford, I ran into the following problem. The software was written in
assembly language, and was burnt into EPROMS. For a long time the
software easily fit in four 2708 (1K x 8) EPROMS. Well, one week after adding
the graphics support code to the terminal, I simply could not get it to
work. I spent literally dozens of hours going over at most 500 assembly
language statements, to no avail. Things were so bad in fact that I
seriously began to question my abilities as a programmer.  One evening
while I was checking the output of the assembler (for at this point I
was convinced  it was an assembler bug) I noticed that that one of the
target addresses of a jump was greater than FFF (hex). I didn't think
anything of it, until a few seconds latter when it occured to me that
addresses > 4K required 5 proms. I quickly went back to
work, burned the extra eprom, and the program worked perfectly!
	Ed

----Message 40 (731 chrs) is----
Mail-From: local user C410RK40 at 4-Nov-82 09:58:20-EST
Date:  4 November 1982 0955-EST (Thursday)
From: Richard.Korf at CMU-10A (C410RK40)
To: Brad.Allen at CMU-10A
Subject: hacking horror story
Message-Id: <04Nov82 095535 RK40@CMU-10A>

Brad,
 My favorite bug of all time concerned an ASR35 Teletype. I was trying to format
some output and found that directly after printing a long line, the second line
was indented by one space. Naturally, the bug went away when I ran the debugger.
It finally turned out that the printing head was physically bouncing off the 
left hand stop. If it didn't have to print again immediately, it would have a
chance to settle back to the beginning of the line.
               -rich
----Message 41 (1799 chrs) is----
Mail-From: local user C410SS40 at 4-Nov-82 11:42:32-EST
Date:  4 November 1982 1134-EST (Thursday)
From: Steven.Shafer at CMU-10A (C410SS40)
To: brad.allen at CMU-10A
Subject: Horrors!
Message-Id: <04Nov82 113429 SS40@CMU-10A>

Brad --
   I had a nasty experience with an old PDP-11/40E running UNIX.
   I had written a program which juggled several processes, one of which was
the largest core-image of any program in existance on the machine (<64K, of
course).  One day, it died a sudden death.
   I started tracking it down with print statements.  At first, the problem
looked like something being set to 0; then, as I added more debugging code,
the 0's jumped around.  I never knew which routines they would crop up in,
or whether global data structures were affected, or even if code itself was
being overwritten.  Sometimes, the program would die even though the
debugging code showed nothing extraordinary.
   I eventually gave up and rewrote the program from scratch, using smaller
processes and succeeding.  Several months later, a paging bug was fixed: it
was responsible for writing 0's on pages when the core-image of a process
was beyond a certain length.
   What makes this a horror story is a UNIX vagary tickled by the bug: within
the code being executed, there was a statement to close a file.  The file,
like all UNIX files, was indexed by a small integer.  When the zeroes struck
this variable, the effect was to close file 0, i.e. disconnect the keyboard!
So, not only did the program die, but it refused to talk to me long before
the actual moment of death, leaving me to watch helplessly as it writhed
in agony, unable to talk to it, unable to interrupt it, and never knowing
where the Flying Fickle Finger of Fate would strike next!
   -- Steve
----Message 43 (390 chrs) is----
Mail-From: local user C410BL50 at 4-Nov-82 12:30:02-EST
Date:  4 November 1982 1214-EST (Thursday)
From: Bruce.Lucas at CMU-10A (C410BL50)
To: brad.allen at CMU-10A
Subject: horrors
Message-Id: <04Nov82 121457 BL50@CMU-10A>

On Unix, I once meant to type "rm *.BAK" but instead typed "rm * .BAK".
Fortunately, I hadn't made too many changes since the last backup to tape.

Bruce

----Message 46 (1054 chrs) is----
Mail-From: local user C410EL80 at 4-Nov-82 14:26:58-EST
Date: 4 November 1982 1411-EST
From: Ellen Lowenfeld at CMU-10A
Subject: Re: Hacking Horror Stories
To: Brad Allen

This one's kind of embarrassing, looking back on it...  When I was
a sophomore at Brown, I took a course which had a big project, I guess
like 311 here, except that the groups were pairs.  So that I and my partner
could test pre-compiled code separately (IBM 370, batch mode) we each
had a dummy main routine.  Mine printed its name, and then called whatever
routine(s) I wanted to test.  Unfortunately, I left out the quotes around
its name, and sent it into infinite recursion.  IBM's great error message
once I found it after looking in 3 manuals, and poring over pages of
IEFH01X (or something like that), was "user error".  Not until I had
spent most of a day looking for a wizard did I go back and just look
at the code I had written.  Was my face red when all the people I had
talked to while trying to find out the problem asked what it turned out
to be!
----Message 47 (1310 chrs) is----
Mail-From: CMUFTP host CMU-RI-FAS received by CMU-10A at 4-Nov-82 14:38:21-EST
Date: 4 Nov 1982 13:09:55-EST
From: Neil.Swartz at CMU-RI-FAS at CMU-10A
To: ba0c@cmua
Subject: Horror stories

Several stories come to mind.  At Princeton, they had WATFIV on a 360/91.
You got 2 seconds of computer time and 600 lines of output.  One job came
out in WATFIV that printed a line of characters and then overstruck the
characters again and again.  The computer counted this as one line so it
would do this forever.  The print heads tore through the paper, the ribbon
and started in on the carriage.  The system was down for more than 12 hours.

Another good one which I have heard about- (If anybody knows more about this
I would like to hear about it)  The Phantom Teletype Program.   The way it
worked was this: At a random time interval the program would start up and
pick a teletype on the system.  It would print "The Phantom Teletype Strikes
Again!!" and then it would copy itself somewhere else on disk, set up the
parameters for its re-execution, and delete the old copy.  System
programmers could find out where it had been, but not where it was
currently.  Because it was too difficult to track, they left it on the
system.

There are lots of good(bad) stories running around.
	Neil

----Message 49 (2598 chrs) is----
Mail-From: ARPANET host UTexas-20 received by CMU-10A at 4-Nov-82 16:41:21-EST
Date:  4 Nov 1982 1538-CST
From: CMP.LSMITH at UTEXAS-20
Subject: some horror stories
To: brad.allen at CMU-10A

My first hacking horror story goes back to my very first
programming course. My program kept exceeding its time limit and
aborting. I checked my code carefully and decided it was correct,
but only needed a little more time to finish. So I confidently
upped my limit from 7 seconds to a CPU minute of CDC 6600 time. I
was really horrified when it timed out again, blowing my entire
semester's allotment. A sharp consultant found my bug. I made the
FORTRAN equivalent of "FOR X = 1.0 BY 0.1 TO 10.0," with my final
test an equal. Since 0.1 is a repeating fraction in binary, it
never equaled 10, so it went past and on to infinity.

Years later I was working on a PDP11/45 Unix system.  The system
began crashing some time after we retrieved something from the
backup tapes, using Unix's raw mode access to the tape. In cooked
mode, things worked right, so we knew it couldn't be a hardware
problem.  After some months of trying to debug the problem, we
modified the tape device handler so that it spun and monitored
its registers until the transfer completed. One of the high bits
in the address register was sticking off. In cooked mode, Unix
read into its system buffers in low core and everything worked
because that bit stayed off anyway. In raw mode, it read into
user space directly.  Whenever the address register was
incremented past that bit boundary, the DMA transfer would drop
down and wipe out some random locations and the system would
slowly collapse.

The worst horror stories are when you spend days hacking at a
program, only to discover that you've invoked a compiler bug.  We
are extremely fortunate to have the ELISP system. I had a problem
with a lengthy computation sometimes returning NIL from compiled
code. Between the (RETURN RESULT) in the called function and
(SETQ X (CALLED ...)) in the caller, the value was being lost.
Interpreted, it worked. If I traced the function, it worked. If I
traced any function in a chain below it, it worked.  It turns out
that if you have a chain of calls about 10 deep, then a MAPCAR
over a list of at least 3 values, then about three more calls
down, and all the functions are compiled, then the time bomb NIL
is stuck up on the stack. If any function in the chain is
interpreted, for example by tracing it, then the behavior goes
away. As far as I know, this bug still hasn't been found.
-------
----Message 50 (1130 chrs) is----
Mail-From: CMUFTP host CMU-CS-IUS received by CMU-10A at 4-Nov-82 21:16:47-EST
Date: 4 Nov 1982 20:08-EST
From: Victor.Milenkovic at CMU-CS-IUS at CMU-10A
Subject: Re: Hacking Horror Stories
To: Brad.Allen at CMU-10A
Message-Id: <82/11/04 2008.913@CMU-CS-IUS>

One version of the PL/I debugger at Yorktown had no provision for
displaying the hex values of pointer variables.  However, it would, on
request, display the hex address of any other type of variable, as well
as its value.  And so, in my program, I would create records,
containing a single float variable, based at the pointer I wanted to
see, and recompile.  By requesting the address of these records, I
could determine the value of the pointer.

In PL/I one can allocate an area of memory and declare offset variables
into it.  One can freely assign offset variables into pointer variables
and back again -- or so I thought.  If a pointer to offset assignment
results in a negative offset, nothing complains (although it should),
but if one assigns the offset back to the pointer, it gets garbage.
This peculiarity caused a very tenacious bug.
----Message 51 (304 chrs) is----
Mail-From: local user C410BL03 at 4-Nov-82 21:52:38-EST
Date:  4 November 1982 2151-EST (Thursday)
From: Bruce.Leverett at CMU-10A
To: Brad.Allen at CMU-10A
Subject: Re: hacking horror stories
In-Reply-To: <04Nov82 210911 BA0C@CMU-10A>
Message-Id: <04Nov82 215100 BL03@CMU-10A>

Don't remember.
----Message 52 (2968 chrs) is----
Mail-From: local user C425EC0F at 4-Nov-82 22:12:20-EST
Date:  4 November 1982 2210-EST
From: eddie caplan at CMU-10A
To: brad allen at CMU-10A
Subject: hacking horror stories

i was doing research in the computer music lab.  i was trying to
generate emotional responses in subjects by producing sympathetic
vibrations from the 64 loudspeakers surrounding the listening room.
normally, we would add sub- and ultrasonic frequencies to classical
"standards", and then play them to the subjects.

now, usually we just use frequency modulation to synthesize the
instruments of the classic orchestras.  but one day as i was
making an undergraduate volunteer retch to beethoven's seventh
symphony, a thought struck me.  if i changed to additive synthesis
for the instruments, i could elicit REALLY BIG responses!  i mean,
i had been having pretty good results up 'til then, and i wasn't
complaining.  but, with FM there was lots of data lost.  additive
synthesis would make the music itself generate an emotional response.
full fidelity beethoven combined with me could convert hasidic jews to
catholicism!

so, i spent the next week redoing the beethoven.  i finished at
2:30am, and the only other person around was my officemate, dana.
i asked her if she had heard beethoven's seventh recently.  i told
her that i had a recording of boston symphony conducted by klaus
tennstedt.  i still remember her eyes lighting up at the prospect. i
hated to lie to  her, but she couldn't be told the  truth or the data
would be tainted.  i had to  expose her to it without her suspecting.
i put dana into the listening room and turned on the music with
my sub- and ultrasonic frequencies added.

i watched through the soundproof glass from the observation room.
during the first movement, dana cried uncontrollably.  she curled
up in the chair and wimpered.  dana laughed insanely, and had what
appeared to be several orgasms.

   "i've done it!", i cried.

but then, the second movement began.  i shudder still when i think
of it.  i looked in at dana.  she was sitting upright in the chair,
staring straight ahead, her hands gripping her knees.  there was
blood starting to drip from her fingernails.  she was becoming
catatonic and starting to shake.  i had to halt the processor before
permanent damage was done.  but before i was able to stand, dana
let out an excrutiating scream.  she shook violently and fell to the
floor.  then, dana began to float into the air.  i pulled open
the door and rushed into the listening room.  dana was screaming far
above my head.  beethoven was screaming from the 64 speakers.

then, i called her name.  it was too much.  dana dissolved.

i think that the added sound of me yelling to her exceeded the 
threshold.  i know now that i am to blame for her dissolving, and
that i'm responsible for bringing her back.  perhaps it can be done
with bartok.  dana always liked bartok.

eddie
----Message 53 (2694 chrs) is----
Mail-From: CMUFTP host CMU-CS-Spice received by CMU-10A at 4-Nov-82 22:58:54-EST
Date: 4 Nov 1982 22:08-EST
From: Rob.MacLachlan at CMU-CS-SPICE at CMU-10A
Subject: Hacking Horrors
To: Brad.Allen@cmua
Message-Id: <82/11/04 2208.881@CMU-CS-SPICE>

I ran into my most obsure bug last summer when I was working on a boot image
builder for Accent to run under Accent.  What I had to do was convert the
original program, which had POS filesystem calls that read and wrote random
things scattered throughout it to use the Accent primitives, which are read
and write an entire file.  After factoring this code out into a separate
module I found that the program died the same way about one time out of
five.  Since the debugger was virtually non-existant I proceeded to put in
debugging code.  First I put in a check where it was dying for the fatal
condition, which would print various information.  I found that when the
error occured the cause was that the Pascal Get intrinsic was returning a
random value instead of the correct one, but no particular pattern was
observable.  I then put in code to dump the contents of the pascal file
object after every value read from the file to see if it was getting
clobbered; with this code in place the program died with an illegal memory
reference inside the system print routine inside of one of the debugging
WriteLn's.  At this point it was obvious that something earlier in the
program was damaging the environment somehow, so I tried successively
commenting out earlier parts of the program to find the offending code, and
I found that if I did not read an earlier file, than the problem did not
occur.  This caused me to suspect my file handling module, so I put
debugging code in it to check that all of the pointers it was returning were
valid.  When this debugging code was inserted the program then died earlier
in the program, but this time consistantly during the reading of the third
microcode file.  Insertion of debugging code at this point revealed that to
a point the buffer contained the correct data, but the rest was zero.  At
this point I felt reasonably sure that I had found a bug in Accent, so I
called in the wizards, who looked at the address of the buffer and said: 'Oh
that crosses a 64k boundry'.  Evidently it was a "Known" bug that a pascal
object could not cross a 64k boundry, because the address calculations wrap
around, and the ReadFile routine I was calling read the file into a place in
memory such that it crossed a 64k boundry.  The Execution of the debugging
code I put in caused storage to be allocated, thus causing the heap to cross
a 64k boundry earlier in the program.
----Message 54 (1784 chrs) is----
Mail-From: local user C410TL19 at 5-Nov-82 01:22:19-EST
Date:  5 November 1982 0122-EST (Friday)
From: Tom.Lane at CMU-10A
To: Brad.Allen at CMU-10A
Subject: Re: Hacking Horror Stories
Message-Id: <05Nov82 012212 TL19@CMU-10A>

  Well, after reading your accumulated file I felt like I should
contribute one of my own.
  I have spent too many years of my life hacking systems which tried to
enlarge a processor's address space by using software-controlled bank
switching (C.mmp/Hydra & Cm* locally, Hewlett-Packard 9845 out in the
real world; personal computing CP/M systems seem to be going down the
same garden path). These machines extend a processor with (say) a 64K
address space to handle megabytes, by dividing the processor address
space into two to 16 blocks. Each block is mapped to a block of physical
memory by means of an associated processor register. Accessing a
particular memory location requires loading up one of the map registers
with the block number of the location, then accessing the processor-
visible address "register number * block size + location's offset
within block".
  This scheme is a LOSER. The majority of bugs found in each system
I have worked with have been directly related to bank switching;
it's just too easy to forget to load or restore a map register.
This leads to reading or clobbering semi-random locations in blocks
other than the one wanted. Worse, the bugs are often very difficult
to duplicate, since they only show up when two data structures being
manipulated at once happen to reside in different physical blocks.
HP's testing records showed that 75% of the bugs discovered during
system testing were of this ilk; many of them required an unreasonable
amount of effort to track down.
				tom lane
  