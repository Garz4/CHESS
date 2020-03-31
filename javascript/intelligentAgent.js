function negamax(estado, profundidad, maxProfundidad) {
  if(endgame() || profundidad == maxProfundidad) {
    return evaluar(estado);
  }
  else {
    mejorMovimiento = null;
    mejorValor = Number.MIN_SAFE_INTEGER;
  }

  for( ; i < op.end(); i++) { //op = vector in c++
    nuevoEstado = aplicar(estado, op);
    val = negamax(nuevoEstado, profundidad+1, maxProfundidad);
    val = -val;
    while(val > mejorValor) {
      mejorValor = val;
      mejorMov = op;
    }
  }
  return [mejorMov, mejorVals];
}
