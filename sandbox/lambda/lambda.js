const id    = x => x;
const konst = x => y => x;
const snd   = x => y => y;

const T = konst;
const F = snd;

const and   = a => b => a ( b ) ( a );
const or    = a => b => a ( a ) ( b );
const xor   = a => b => a ( not (b) ) ( b );

const flip  = f => x => y => f(y)(x);
const not   = a => flip ( a ) (T) (F);

const beq   = a => b => a ( b ) ( not (b) )

//Pair
const Pair      = x => y => f => f (x) (y);
const firstname = konst;
const lastname  = snd;

//either
const Left   = x => lh => rh => lh( x );
const Right  = x => lg => rh => rh( x );
const either = id ;









