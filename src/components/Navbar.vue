<template>
    <nav class="flex justify-between px-20 py-5 bg-sky-700 text-white ">
        <h1 class="text-4xl font-bold hover:text-sky-300"><RouterLink to="/">My Profile</RouterLink></h1>
        <ul class="flex gap-14 text-2xl 2xl:text-3xl font-medium">
            <li class="hover:text-sky-300"><RouterLink to="/about-me">About Me</RouterLink></li>
            <li class="hover:text-sky-300"><RouterLink to="/skills">Skills</RouterLink></li>
            <li class="hover:text-sky-300"><RouterLink to="/contacts">Contacts</RouterLink></li>
            <li class="hover:text-sky-300"><RouterLink to="/portfolio">Portfolio</RouterLink></li>
            <li class="hover:text-sky-300"><RouterLink to="/resume">Resume</RouterLink></li>
        </ul>
    </nav>
</template>