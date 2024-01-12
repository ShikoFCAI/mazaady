<template>
  <main class="">
    <nav class="flex justify-between items-center py-2 lg:py-6 bg-white alley">
      <NavMain />
      <NavSecondary />
    </nav>
    <section class="alley pt-4 lg:pt-12">
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="flex flex-col gap-6">
          <SharedCompositeBio />
          <SharedCompositeQr />
        </div>
        <SharedCompositeMain />
      </div>
    </section>
  </main>
</template>
