<script>
  export let value  ;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  $: offset = circumference - (value / 100) * circumference;
</script>

<div class="relative flex flex-col items-center justify-center text-center text-white">
  <!-- Dairesel progress -->
  <svg class="-rotate-90deg" width="120" height="120">
    <circle
      cx="60"
      cy="60"
      r={radius}
      stroke="#333"
      stroke-width="10"
      fill="transparent"
    />
    <circle
      cx="60"
      cy="60"
      r={radius}
      stroke="#ff7b00"
      stroke-width="10"
      fill="transparent"
      stroke-dasharray={circumference}
      stroke-dashoffset={offset}
      stroke-linecap="round"
      class="transition-all duration-700"
    />
  </svg>

  <!-- Ortadaki resim -->
  <div
    class="absolute w-[50px] h-[50px] object-contain text-3xl {value >= 100 ? "mr-4 mt-3": "mt-2"}"
  > 
  {value}%      
</div>

</div>
